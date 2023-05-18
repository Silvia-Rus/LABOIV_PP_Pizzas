import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup } from '@angular/forms';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  repartidores: any;
  constructor(private db: AngularFirestore,

  ) { }

  addElement(coleccion: string, documento: string, data: any) {
    let ref = this.db.collection(coleccion);
    ref.doc(documento).set(data);
  }

  public async addRepartidor(repartidor: FormGroup) {
    this.repartidores = {
      dni: repartidor.get("dni")?.value,
      nombre: repartidor.get("nombre")?.value,
      edad: repartidor.get("edad")?.value,
      capacidad: repartidor.get("capacidad")?.value,
      pais: repartidor.get("pais")?.value,
      unidad: repartidor.get("unidad")?.value,
      continente: repartidor.get("continente")?.value,
    }
    return await this.db.collection('repartidores').add(this.repartidores);
  }

  getCollection(coleccion: string) {
    return this.db.collection(coleccion, ref => ref.orderBy('nombre', 'asc')).valueChanges();
  }

  getElement(dni: string) {
    return this.db.collection('repartidores', ref => ref.where("dni", "==", dni)).snapshotChanges();
  }

}