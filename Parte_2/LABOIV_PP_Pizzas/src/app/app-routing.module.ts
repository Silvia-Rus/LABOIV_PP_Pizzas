import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { HomeRepartidorComponent } from './paginas/homeRepartidor/homeRepartidor.component';
import { CrearRepartidorComponent } from './paginas/crearRepartidor/crearRepartidor.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'homeRepartidor', component: HomeRepartidorComponent },
  { path: 'crearRepartidor', component: CrearRepartidorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
