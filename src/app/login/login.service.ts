import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";


@Injectable()
export class LoginService {
  
  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000/users';
  @Output() fireIsLoggedIn: EventEmitter<any> = new EventEmitter<any>();

  verificationConnexion(auth) {
  
    this.http.post(`${this.url}/auth`, auth)
      .subscribe(
        res => {
            this.fireIsLoggedIn.emit(res); 
          console.log(res);
          this.toastr.success('Connected', 'Success');
          this.router.navigateByUrl('/home');

          
        },
        err => {
          
          
          this.toastr.error('Incorrect Username and/or Password!');
        }
      );
      
  }
  getEmitter() {
    return this.fireIsLoggedIn;
  } 

}


