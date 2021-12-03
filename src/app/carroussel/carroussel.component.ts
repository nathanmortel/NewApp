import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carroussel',
  templateUrl: './carroussel.component.html',
  styleUrls: ['./carroussel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarrousselComponent implements OnInit {
  showNavigationArrows = true;

  constructor(config: NgbCarouselConfig) { 
    config.showNavigationArrows = true;
  }
  images: Array<string> = ["/assets/img/publicité 1.png","/assets/img/publicité 2.png","/assets/img/publicité 3.png"];

  ngOnInit(): void {
  }

}
