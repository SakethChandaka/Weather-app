import { Component } from '@angular/core';
import {WeatherService } from 'src/app/services/weather.service';
import {weatherData} from 'src/app/models/weather.models'
import {OnInit} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private WeatherService: WeatherService){

  }

  cityName: string="mumbai";
  WeatherData?: weatherData;

  ngOnInit(): void{
    this.getWeatherData(this.cityName);
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
  }

  private getWeatherData(cityName: string){
    this.WeatherService.getWeatherData(this.cityName)
    .subscribe({
      next:(response) =>{
        this.WeatherData = response;
        console.log(response);
      }
    })
  }
}
