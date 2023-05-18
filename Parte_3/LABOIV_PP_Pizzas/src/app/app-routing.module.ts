import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { HomeRepartidorComponent } from './paginas/homeRepartidor/homeRepartidor.component';
import { HomePizzasComponent } from './paginas/homePizzas/homePizzas.component';
import { CrearRepartidorComponent } from './paginas/crearRepartidor/crearRepartidor.component';
import { LogueadoGuard } from './guards/logueado.guard';
import { AdminGuard } from './guards/admin.guard';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'homeRepartidor', component: HomeRepartidorComponent, canActivate: [LogueadoGuard]},
  { path: 'homePizzas', component: HomePizzasComponent, canActivate: [AdminGuard] },
  { path: 'crearRepartidor', component: CrearRepartidorComponent },
  { path: 'login', loadChildren: () => import('./paginas/login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
