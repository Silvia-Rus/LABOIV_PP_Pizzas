import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, 
              private router: Router,
              private alerta: AlertService) { }

  login(email: string, password: string)
  {
    this.auth.signInWithEmailAndPassword(email, password)
    .then((user)=> {
      this.router.navigate(['/home']);
      this.alerta.lanzarAlertaExito('¡Holi '+user.user?.email+'!');
    }).catch((error) => {
      this.alerta.lanzarAlertaError(this.error(error.code));        
      });
  }

  error(error:string)
  {
    switch(error){
    case 'auth/wrong-password':
    case 'auth/user-not-found':
    case 'auth/invalid-email':
      return "Datos incorrectos.";
       break;
    case 'auth/email-already-in-use':  
      return "El mail ya está en uso.";
        break;  
    default:
      return "Error desconocido";
       break;
    }
  }
  async logout() {
    this.auth.signOut()
    .then((user)=> {
      this.alerta.lanzarAlertaExito('¡Chau!');
      this.router.navigate(['/home']);
    }).catch((error) => {
        this.alerta.lanzarAlertaError(error.code);        
      });
  }
  getAuth() {
    return this.auth.authState;
  }
}