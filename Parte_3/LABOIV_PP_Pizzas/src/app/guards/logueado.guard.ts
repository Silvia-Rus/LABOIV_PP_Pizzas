import { AuthService } from 'src/app/servicios/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/servicios/alert.service';

@Injectable({
  providedIn: 'root'
})
export class LogueadoGuard implements CanActivate {
  constructor(private router: Router,
              private auth: AuthService,
              private alerta: AlertService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      let retorno = true;
      this.auth.getAuthState().forEach((datos) => {
        if(!datos?.email)
        {
          //this.alerta.lanzarAlertaError('Sin acceso a Repartidores');
          this.router.navigateByUrl("/home");
           retorno =  false;
        }
      });
      return retorno;
  }
  
}
