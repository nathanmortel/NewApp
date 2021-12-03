import { Component, OnInit } from '@angular/core';
import { ObservablesService } from "../services/observable/observable.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public bikeList: Array<any> = []

  constructor(private ObservablesService: ObservablesService) {
    // Get user data observer
    this.ObservablesService.getbikeList().subscribe( dataObserver => {
      this.bikeList = dataObserver
    })
  }
  // images: Array<string> = ["/assets/img/ducati_streetfighter.png","/assets/img/kawasaki_z900.png","/assets/img/yamaha_mt09.png"];

  products: Array<{img: string, title: string, description: string}> = [];
  ngOnInit(): void {
    //this.ObservablesService.setbikeList()
    /* this.products.push(
      {img: "/assets/img/ducati_streetfighter.png", title: 'Ducati Streetfighter V4', description: "La Panigale V4 dépouillée de son carénage, avec un guidon haut, un poids de 178 kg, un moteur Desmosedici Stradale de 1 100 cm3 et 208 CV, maîtrisée par des ailerons et un boîtier électronique de dernière génération."},
      {img: "/assets/img/kawasaki_z900.png", title: 'Kawasaki Z900', description: "Constamment à la pointe du marché dans la catégorie des roadsters de moyenne cylindrée, la Z900 est disponible en deux versions : une moto de 125 ch (92,2 kW) et une autre avec une puissance maximum de 95 ch (70kW)."},
      {img: "/assets/img/yamaha_mt09.png", title: 'Yamaha MT09', description: "La MT-09 s’est fait un nom en grande partie par son moteur. Elle a inauguré le trois-cylindres CP3 et il a emballé le monde motard avec son caractère, son enthousiasme et ses pointes de frénésie. Aujourd’hui, il veut devenir un 900."},
      ) */
  }

}
