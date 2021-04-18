import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';

import { SensorsData } from './models/SensorsData';


@Injectable({
  providedIn: 'root',
})
export class DataService {

  sensorsData$  = this.http
    .get<SensorsData[]>('https://agm-sensor-backend.azurewebsites.net/api/GetGardenSensorData?code=AhaWeqoVfzHvXViG1/2jGn9ImyL3Tp5j/60xetHWsnmH9u9Zd9XLfw==')
    .pipe(
      shareReplay(1)
    );

  constructor(private http: HttpClient) {}
}
