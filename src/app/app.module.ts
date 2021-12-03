import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarrousselComponent } from './carroussel/carroussel.component';
import { CardComponent } from './card/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Card2Component } from './card2/card2.component';
import { FooterComponent } from './footer/footer.component';
import { SinglePageComponent } from './routes/single-page/single-page.component';
import { HomePageComponent } from './routes/home-page/home-page.component';
// Router
import { RouterModule } from "@angular/router";
import { AppRouterModule } from "./app.routeur";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarrousselComponent,
    CardComponent,
    Card2Component,
    FooterComponent,
    SinglePageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( AppRouterModule, { onSameUrlNavigation: 'reload' } ),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
