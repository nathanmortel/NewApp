/* 
Imports 
*/
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
//

/* 
Definition and export
*/
@Injectable({
  providedIn: 'root'
})
export class ObservablesService {

  constructor() {}
  // State
  protected bikeList: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  //getter
  public getbikeList(): Observable<any> { return this.bikeList };

  public setbikeList = () => {
    this.bikeList.next([
      {id:1, img: "/assets/img/ducati_streetfighter.png", title: 'Ducati Streetfighter V4', description: "La Panigale V4 dépouillée de son carénage, avec un guidon haut, un poids de 178 kg, un moteur Desmosedici Stradale de 1 100 cm3 et 208 CV, maîtrisée par des ailerons et un boîtier électronique de dernière génération.", banner_photo:"/assets/img/streetfighter_banner.jpg"},
      {id:2, img: "/assets/img/kawasaki_z900.png", title: 'Kawasaki Z900', description: "Constamment à la pointe du marché dans la catégorie des roadsters de moyenne cylindrée, la Z900 est disponible en deux versions : une moto de 125 ch (92,2 kW) et une autre dédiée aux permis A2 avec une puissance maximum de 95 ch (70kW)."},
      {id:3, img: "/assets/img/yamaha_mt09.png", title: 'Yamaha MT09', description: "La MT-09 s’est fait un nom en grande partie par son moteur. Elle a inauguré le trois-cylindres CP3 et il a emballé le monde motard avec son caractère, son enthousiasme et ses pointes de frénésie. Aujourd’hui, il veut devenir un 900."},
    ]); 
  }

  getSingleMoto(id:number, list:Array<any>){
    list.forEach(elm => {
      if(elm.id === id)
      {
        console.log(elm);
        return elm;
      }
      else{ console.log('Aucune data') }
    });
    /*console.log(' on et la');
    list.filter(elm => elm.id !== id);
    console.log(list);
    if( typeof list == 'undefined')
    {
      console.log(' y a R');
    }
    return list;*/
  }
    
  }

//

