import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, switchMap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { SensorsData } from './models/SensorsData';
import { TimePeriodType } from './time-period-selector';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  // private getUri = 'http://localhost:7071/api/GetGardenSensorData?';
  private getUri = 'https://agm-sensor-backend.azurewebsites.net/api/GetGardenSensorData?code=AhaWeqoVfzHvXViG1/2jGn9ImyL3Tp5j/60xetHWsnmH9u9Zd9XLfw==';

  private timePeriod$ = new BehaviorSubject<TimePeriodType>('day');
  sensorsData$ = this.timePeriod$
    .pipe(
      switchMap(timePeriod => {
        console.log('timePeriod', timePeriod);
        return this.http
          .get<SensorsData[]>(this.getUri + `&timePeriod=${timePeriod}`);
      }),
      shareReplay(1)
    );

  get timePeriod(): TimePeriodType {
    return this.timePeriod$.value;
  }
  set timePeriod(value: TimePeriodType) {
    this.timePeriod$.next(value);
  }

  constructor(private http: HttpClient) {}
}
