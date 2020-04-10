import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { GlobalComponent } from './global/global.component';
import { CountriesComponent } from './countries/countries.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';




const appRoutes: Routes = [
  { path:'',component:HomeComponent},
  { path:'global', component: GlobalComponent },
  { path: 'countries',  component: CountriesComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GlobalComponent,
    CountriesComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
