import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IResponse } from '../interfaces/response.interface';
import { error } from 'console';


@Injectable({
  providedIn: 'root'
})
export class UsrService {

  private apiUrl = 'http://localhost:3050/autenticacion';

  isLogged: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  login(cedula: number, contrasena: string) {
    let headers = new HttpHeaders();
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Content-Type'", "application/json");

    return this.http.post<any>(this.apiUrl,
      {
        cedula: cedula,
        contrasena: contrasena
      }, { headers: headers }
    ).subscribe((response: IResponse) => {
      if (response.status == 200) {
        localStorage.setItem("user", JSON.stringify(response.data));
        this.isLogged = true;
        this.router.navigate(['/home']);
      }
      else {
        console.log(response.mensaje);
      }
    });
  }

  getUser() {
    const user = localStorage.getItem("user");
    if (user != null) {
      return user;
    } else {
      return null;
    }
  }
}


