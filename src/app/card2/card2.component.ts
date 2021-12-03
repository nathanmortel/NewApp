import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

  constructor() { }
  // images: Array<string> = ["/assets/img/ducati_streetfighter.png","/assets/img/kawasaki_z900.png","/assets/img/yamaha_mt09.png"];

  products: Array<{img: string, title: string, description: string}> = [];
  ngOnInit(): void {
   this.products.push(
      {img: "/assets/img/bmw_1000rr.png", title: 'BMW 1000RR', description: "Toujours sur le fil du rasoir et à la recherche de la trajectoire idéale, la S 1000 RR dispose d'une puissance phénoménale de 152 kW (207 ch)."},
      {img: "/assets/img/panigale_V4R.png", title: 'Ducati Panigale V4R', description: "Avec leurs lignes affirmées et leur silhouette sculptée au couteau, les Panigale sont des sportives qui en imposent par leur beauté. Elles donnent ainsi frissons et émotions à tout amoureux de l'accélération !"},
      {img: "/assets/img/yamaha_r1.png", title: 'Yamaha R1', description: "Développée sans compromis et construite à partir de la technologie de moteur et de châssis la plus sophistiquée, la R1 est le nec plus ultra des Yamaha Supersport."},
      ) 
  }

}
