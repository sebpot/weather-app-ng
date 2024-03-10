import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { WeatherService } from './shared/weather.service';
import { WeatherData } from './shared/weather-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather-app';

  location: string = '';
  currentWeather: WeatherData | undefined;

  constructor(private weatherService: WeatherService){}

  ngOnInit(): void {
    this.location = 'Warsaw';
    this.handleResponse();
  }

  onSubmit(form: NgForm) {
    this.location = form.value.location;
    this.handleResponse();
    
    form.reset();
  }

  handleResponse() {
    this.weatherService.getWeather(this.location).subscribe(
      response => {
        let responseData = JSON.parse(JSON.stringify(response));
        this.currentWeather = new WeatherData(
          responseData.name,
          responseData.sys.country,
          responseData.weather[0].main,
          Math.round(responseData.main.temp - 273.15),
          responseData.wind.speed,
          responseData.main.humidity,
          responseData.main.pressure
        );
        console.log(responseData);
      }
    );
  }
}
