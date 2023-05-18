import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { AlertService } from './alert.service';
import { Repartidor } from '../clases/repartidor';
import { Pizza } from '../clases/pizza';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  repartidor: any;
  coleccionRepartidores: string = 'repartidores';
  coleccionPizzas: string = 'pizzas';

  constructor(private db: AngularFirestore,
              private alerta: AlertService
             ) { }

  addElement(coleccion: string, documento: string, data: any) {
    let ref = this.db.collection(coleccion);
    ref.doc(documento).set(data);
  }

  private async addItem(item: any, coleccion: string) {
    console.log(item);
    this.db.collection(coleccion).add(JSON.parse(JSON.stringify(item)))
    .then((user)=> {
      this.alerta.lanzarAlertaExito('¡Grabado con éxito en '+coleccion+' !');
    }).catch((error) => {
      console.log(error);
      this.alerta.lanzarAlertaError(error);        
      });  
  }

  public addRepartidor(item: Repartidor){
    this.addItem(item, this.coleccionRepartidores);
  }

  public addPizza(item: Pizza){
    this.addItem(item, this.coleccionPizzas);
  }

  getCollection(coleccion: string) {
    return this.db.collection(coleccion, ref => ref.orderBy('nombre', 'asc')).valueChanges();
  }

  getElement(dni: string) {
    return this.db.collection('repartidores', ref => ref.where("dni", "==", dni)).snapshotChanges();
  }

  modificarPizzas(pizza: any) {
    return firebase
      .firestore()
      .collection(this.coleccionPizzas)
      .where('nombre', '==', pizza.nombre)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.update({
            ingredientes: pizza.ingredientes,
            peso: pizza.peso,
            precio: pizza.precio,
          });
          this.alerta.lanzarAlertaExito('Pizza modificada con éxito');
        });
      })
      .catch((error) => {
        console.log('Error updating document: ', error);
      });
  }
    
  borrarPizza(pizza: any) {
    return firebase
      .firestore()
      .collection(this.coleccionPizzas)
      .where('nombre', '==', pizza.nombre)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
          this.alerta.lanzarAlertaExito('Pizza borrada con éxito');
        });
      })
      .catch((error) => {
        console.log('Error updating document: ', error);
      });
  }

}