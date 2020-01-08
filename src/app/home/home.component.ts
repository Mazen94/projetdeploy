import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myArray = ['Peindre un chambre', "Cours d'informatique", 'Monter un meuble', 'Fixer une étagère', 'Garde chien',''];
    i=0;
    j;
     intervalle=setInterval(()=>
    {
      if(this.i<4)
      this.i ++ ;
      else
     this.i=0;
    },2000)
   
  constructor() {
   this.intervalle;}

  ngOnInit() {
  }
  search()
  {
    this.j=this.i;
    this.i=5;
    clearInterval(this.intervalle);
    
  }

}
