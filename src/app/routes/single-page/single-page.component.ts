import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObservablesService } from 'src/app/services/observable/observable.service';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent implements OnInit {

  public bikeList: Array<any> = [];
  constructor(private route: ActivatedRoute,
    private serviceproduct: ObservablesService) {}
  public id: number = 0;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params.id)
      this.id = params.id;
    });
    this.serviceproduct.getbikeList().subscribe(elms => {
      this.bikeList = elms;
    });

    this.bikeList.filter(elm => elm.id === 1);
    console.log(this.bikeList);
    // this.serviceproduct.getSingleMoto(this.id, this.bikeList);
    }

}
