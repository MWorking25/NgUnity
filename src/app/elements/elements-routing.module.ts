import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreasComponent } from '../master/areas/areas.component';
import { HotelsComponent } from '../master/hotels/hotels.component';
import { ExperiencesComponent } from '../master/experiences/experiences.component';
import { CabsComponent } from '../master/cabs/cabs.component';
import { BusesComponent } from '../master/buses/buses.component';
import { UsersComponent } from '../master/users/users.component';
import { MembersComponent } from '../master/members/members.component';
import { RestraurantsComponent } from '../master/restraurants/restraurants.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { OffersComponent } from '../master/offers/offers.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RailwayApisComponent } from '../master/railway-apis/railway-apis.component';
import { AreaDetailsComponent } from '../master/areas/area-details/area-details.component';

const routes: Routes = [
  {path:'',component:NavigationComponent,children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'areas',component:AreasComponent},
    {path:'hotels',component:HotelsComponent},
    {path:'experiences',component:ExperiencesComponent},
    {path:'cabs',component:CabsComponent},
    {path:'buses',component:BusesComponent},
    {path:'users',component:UsersComponent},
    {path:'members',component:MembersComponent},
    {path:'restraurants',component:RestraurantsComponent},
    {path:'offers',component:OffersComponent},
    {path:'railways',component:RailwayApisComponent},
    {path:'areadetails',component:AreaDetailsComponent},
    {path:'',redirectTo:'dashboard',pathMatch:"full"},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
