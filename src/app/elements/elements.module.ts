import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {A11yModule} from '@angular/cdk/a11y';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {PortalModule} from '@angular/cdk/portal';
import { ThemesDirective } from '../directives/themes.directive';
import {
  MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule,
  MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule,
  MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule,
  MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule,
  MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule,
  MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule
} from '@angular/material';
import { ElementsRoutingModule } from './elements-routing.module';
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
import { RailwayApisComponent } from '../master/railway-apis/railway-apis.component';

@NgModule({
  declarations: [
    AreasComponent,
    HotelsComponent,
    ExperiencesComponent,
    CabsComponent,
    BusesComponent,
    UsersComponent,
    MembersComponent,
    NewEntryComponent,
    RestraurantsComponent,
    DashboardComponent,
    OffersComponent,
    NavigationComponent,  
    RailwayApisComponent,
    ThemesDirective
  ],
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    ElementsRoutingModule,
    A11yModule,
    CdkTableModule,
    CdkTreeModule,
    CdkStepperModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ScrollingModule,
    PortalModule,
  ]
})
export class ElementsModule { }
