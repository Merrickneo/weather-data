import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';
import { Location } from 'src/app/location';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
    pastLocations : Location[] = [
        new Location(40.730610, -73.935242)
    ];
    api_link = 'https://api.openweathermap.org/data/3.0/onecall?';
    weatherData = null;
    pastLocationsChanged = new EventEmitter<Location[]>();

  constructor(private httpClient: HttpClient) { }

    getWeather(latitude: number, longitude: number) {
        const params = {
          lat: latitude.toString(),
          lon: longitude.toString(),
          apiid: environment.appId
        };
        
        let new_link = this.api_link + 'lat=' + latitude.toString() + '&lon=' + longitude.toString() + '&appid=' + environment.appId;
        this.pastLocations.push(new Location(latitude, longitude));
        this.pastLocationsChanged.emit(this.pastLocations);
        return this.httpClient.get<any>(new_link);
      }

      getPastLocations() {
         return this.pastLocations;
      }
}
