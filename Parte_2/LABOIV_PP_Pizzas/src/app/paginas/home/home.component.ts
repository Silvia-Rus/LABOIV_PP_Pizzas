import { Component, OnInit } from '@angular/core';
import { UserGithub } from 'src/app/interfaces/user-github';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/servicios/auth.service';
import { NgxSpinnerService } from "ngx-spinner";

//import { SpinnerService } from 'src/app/servicios/spinner.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  userLogged = this.auth.getAuth();
  errorShow: boolean = false;
  errorMessage: string = '';

  constructor(private http: HttpClient, 
              private auth: AuthService, 
              private spinnerService: NgxSpinnerService
              //private spinnerService: SpinnerService
              ) { }

  data: UserGithub = {
    name: '',
    login: '',
    location: '',
    avatar_url: '',
  };

  ngOnInit(): void {
    this.http.get('https://api.github.com/users/silvia-rus')
             .subscribe((rsp: any) => {
      this.data = rsp;
      this.setImage(rsp.avatar_url);
      console.log(rsp);
    });
  }
  logout() {
    this.spinnerService.show();
    this.auth.logout().catch(error => { this.errorShow = true; this.errorMessage = error.message; console.log("Error en ingreso", error) })
    .finally(() => { this.spinnerService.hide(); });
  }

  setImage(url: any) {
      var perfil = document.getElementById("img") as HTMLImageElement;
      perfil.src = url;
    }
  }


