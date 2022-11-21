import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { weatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<weatherData> {
    const ev={
      url: 'https://open-weather13.p.rapidapi.com/city/'+cityName,
      name: 'X-RapidAPI-Host',
      hname: 'open-weather-map27.p.rapidapi.com',
      kname: 'X-RapidAPI-Key',
      kval: '4f8bc16822mshd18cd9c4c5e28d7p1c5679jsne9b307f2d1d6'
    };

    return this.http.get<weatherData>(ev.url, 
      { headers: new HttpHeaders()
      .set(ev.name, ev.hname)
      .set(ev.kname, ev.kval),
      params: new HttpParams()
      .set('units', 'metric')
      .set('mode', 'json')
    })
  }
}
