import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';
import { AlertService } from 'src/app/servicios/alert.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router,
              private auth: AuthService,
              private alerta: AlertService) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let retorno = true;
      this.auth.getAuthState().forEach((datos) => {
        if(datos?.email != 'admin@pizzeria.com')
        {
          //this.alerta.lanzarAlertaError('Sin acceso a Pizzas');
          this.router.navigateByUrl("/home");
           retorno =  false;
        }
      });
      return retorno;
  }
  
}
