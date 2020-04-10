import { CovidService } from './../covid.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  getCountries:any[]
  constructor(private Covidservice:CovidService) { }

  ngOnInit(): void {

    this.Covidservice.getCountriesData().subscribe((data:any[])=>{
      console.log(data)
      this.getCountries=data
    })
  }

}
