import { CovidService } from './../covid.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

      country:string="";
      getCountries:any[]
      particularCountryData:any;
      constructor(private Covidservice:CovidService) { }


      ngOnInit(): void {

      }

     
      
      onClick(){
     
        if (this.country!="" ) {
          this.Covidservice.getParticularCountryDetail(this.country).subscribe((data:any[])=>{
            console.log(data);
          this.particularCountryData=data
   })
 }

        
       }  
    
     
  

}
