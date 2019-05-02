import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreasComponent } from '../master/areas/areas.component';
import { HotelsComponent } from '../master/hotels/hotels.component';
import { ExperiencesComponent } from '../master/experiences/experiences.component';
import { CabsComponent } from '../master/cabs/cabs.component';
import { BusesComponent } from '../master/buses/buses.component';
import { UsersComponent } from '../master/users/users.component';
import { MembersComponent } from '../master/members/members.component';
import { NewEntryComponent } from '../hotel/new-entry/new-entry.component';
import { RestraurantsComponent } from '../master/restraurants/restraurants.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { OffersComponent } from '../master/offers/offers.component';
import { NavigationComponent } from './navigation/navigation.component';
const routes: Routes = [
  {path:'',component:NavigationComponent,children:[
    {path:'',component:DashboardComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
