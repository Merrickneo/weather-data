import { Component, ViewChild } from '@angular/core';
import { WeatherService } from './weather.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
    latitude: number = 0;
    longitude: number = 0;
    weatherData = null;
    selectedLocation = null;

    constructor(private weatherService: WeatherService) {}

    onWeatherClick() {
        this.weatherService.getWeather(this.latitude, this.longitude).subscribe((data) => {
            console.log(data);
            this.weatherData = data;
        });
        this.latitude = 0;
        this.longitude = 0;
    }
}
