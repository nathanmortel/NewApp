import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public burgerIsOpen: Boolean;
  public postList: string[];

  constructor() { 
    this.burgerIsOpen = false
    this.postList = [
      'lorem',
      'ipsum'
    ]
  }

  toggleBurger(){
    this.burgerIsOpen = !this.burgerIsOpen
    
  }

  ngOnInit(): void {
  }

}
