import { Component, OnInit } from '@angular/core';
import { ObservablesService } from "../../services/observable/observable.service";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private ObservablesService: ObservablesService){
    this.ObservablesService.setbikeList()
  }

  ngOnInit(): void {
  }

}
