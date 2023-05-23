import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';
import { Location } from 'src/app/location';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
    pastLocations : Location[] = [];
    api_link = 'https://api.openweathermap.org/data/3.0/onecall?';
    weatherData = null;

  constructor(private httpClient: HttpClient) { }

    // getWeather(latitude: number, longitude: number) {
    //     const params = new HttpParams()
    //     .set('lat', latitude.toString())
    //     .set('lon', longitude.toString())
    //     .set('apiid', environment.appId);
    getWeather(latitude: number, longitude: number) {
        const params = {
          lat: latitude.toString(),
          lon: longitude.toString(),
          apiid: environment.appId
        };
        
        let new_link = this.api_link + 'lat=' + latitude.toString() + '&lon=' + longitude.toString() + '&appid=' + environment.appId;
        this.pastLocations.push(new Location(latitude, longitude));
        return this.httpClient.get<any>(new_link);
      }
}
