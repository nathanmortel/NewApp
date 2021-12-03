/* 
Import
*/
  // Angular
  import { Component, OnInit } from '@angular/core';
//

/* 
Componant configuration
*/
  @Component({
    selector: 'app-root',
    template: `
      <router-outlet></router-outlet>
    `
  })
//


/* 
Componant class definition
*/
  export class AppComponent implements OnInit {
    
    constructor(){}

    ngOnInit(){}
  }
//
