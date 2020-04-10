import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {

  covidGlobalData:any;
  constructor(private covidService:CovidService) { }

  ngOnInit(): void {

    this.covidService.getGlobalData().subscribe((data)=> {
      console.log(data)
      this.covidGlobalData = data;
      
    });
  }

}
