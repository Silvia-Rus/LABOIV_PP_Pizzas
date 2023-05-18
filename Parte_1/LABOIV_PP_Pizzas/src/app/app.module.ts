import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { initializeApp } from "firebase/app";
import { AngularFireModule  } from "@angular/fire/compat";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { CrearRepartidorComponent } from './paginas/crearRepartidor/crearRepartidor.component';

import { BotonVolverHomeComponent } from './componentes/botonVolverHome/botonVolverHome.component';
import { ListaPaisesComponent } from './componentes/listaPaises/listaPaises.component';
import { InfoRepartidorComponent } from './componentes/infoRepartidor/infoRepartidor.component';
import { InfoPaisRepartidorComponent } from './componentes/infoPaisRepartidor/infoPaisRepartidor.component';


const firebaseConfig = {
  apiKey: "AIzaSyDjhLc_Uc4W1mklr9DNK9u8PvqKnbfyXuw",
  authDomain: "pizzerialabo4.firebaseapp.com",
  projectId: "pizzerialabo4",
  storageBucket: "pizzerialabo4.appspot.com",
  messagingSenderId: "286133962726",
  appId: "1:286133962726:web:640355c57c2c662dda7827"
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    BotonVolverHomeComponent,
    ListaPaisesComponent,
    CrearRepartidorComponent,
    InfoRepartidorComponent,
    InfoPaisRepartidorComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    NgxSpinnerModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
