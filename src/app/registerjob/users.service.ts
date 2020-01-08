import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Injectable()
export class UsersService {
  data1;
  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000';
  getMatiere() {
    return this
      .http
      .get(`${this.url}/users`);
  }

  createMatiere(data) {
  
    this.http.post(`${this.url}/users`, data)
      .subscribe(
        res => {
        
          console.log(res);
          this.toastr.success('Votre compte a été créer avec succès.', 'Success');
          this.router.navigateByUrl('/home');
          this.router.navigateByUrl('/home');

        },
        err => {
          
          console.log('Error occured:' , err);
          this.toastr.error(err.message, 'Error occured');
        }
      );
  }
  

}
