import { Component, OnDestroy } from '@angular/core';
import { WeatherService } from './weather.service';
import { Location } from 'src/app/location';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnDestroy {
    latitude: number = 0;
    longitude: number = 0;
    weatherData = null;
    selectedLocation = null;
    pastLocations: Location[] = [];
    subscription: Subscription;

    constructor(private weatherService: WeatherService) {
        this.pastLocations = this.weatherService.getPastLocations();
        this.subscription = this.weatherService.pastLocationsChanged.subscribe((locations: Location[]) => {
            this.pastLocations = locations;
        });
    }

    onWeatherClick() {
        this.weatherService.getWeather(this.latitude, this.longitude).subscribe((data) => {
            console.log(data);
            this.weatherData = data;
        });
        this.latitude = 0;
        this.longitude = 0;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
