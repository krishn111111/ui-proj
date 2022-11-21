import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { weatherData } from './models/weather.model'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private weatherService: WeatherService) { 

  }
  cityName: string = "Bengaluru";
  weatherData?: weatherData; 
 ngOnInit() {
  this.getWeatherData(this.cityName);
  this.cityName="";
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName="";
  }

  private getWeatherData(cityName: string){
    console.log('App component initialized');
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        console.log(response);
        this.weatherData = response;
      }
    });
  }
 }

 