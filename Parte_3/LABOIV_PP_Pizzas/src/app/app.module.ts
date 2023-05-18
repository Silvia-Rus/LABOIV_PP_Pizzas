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
import { HomeRepartidorComponent } from './paginas/homeRepartidor/homeRepartidor.component';
import { HomePizzasComponent } from './paginas/homePizzas/homePizzas.component';
import { HomePedidosComponent } from './paginas/homePedidos/homePedidos.component';
import { CrearRepartidorComponent } from './paginas/crearRepartidor/crearRepartidor.component';

import { ListaPizzasComponent } from './componentes/listaPizzas/listaPizzas.component';
import { InfoRepartidorComponent } from './componentes/infoRepartidor/infoRepartidor.component';
import { InfoPaisRepartidorComponent } from './componentes/infoPaisRepartidor/infoPaisRepartidor.component';
import { ListaPaisesComponent } from './componentes/listaPaises/listaPaises.component';
import { CrearPizzaComponent } from './componentes/crearPizza/crearPizza.component';
import { BorrarPizzaComponent } from './componentes/borrarPizza/borrarPizza.component';
import { ModificarPizzaComponent } from './componentes/modificarPizza/modificarPizza.component';


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
    HomeRepartidorComponent,
    HomePizzasComponent,
    HomePedidosComponent,
    CrearRepartidorComponent,
    InfoRepartidorComponent,
    InfoPaisRepartidorComponent,
    ListaPizzasComponent,
    ListaPaisesComponent,
    CrearPizzaComponent,
    BorrarPizzaComponent,
    ModificarPizzaComponent
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
