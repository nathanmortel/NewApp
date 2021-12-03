/* 
Imports
*/
    // Angular
    import { Routes } from '@angular/router';
    
    // Inner
    import { SinglePageComponent } from "./routes/single-page/single-page.component";
    import { HomePageComponent } from "./routes/home-page/home-page.component";
//

/* 
Export
*/
export const AppRouterModule: Routes = [
    {
      path: '',
      component: HomePageComponent
    },
    {
        path: 'single/:id',
        component: SinglePageComponent
      },
  ];
//