import { Component } from '@angular/core';

// import { SensorsData } from './models/SensorsData';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  lightChartData: any;
  soilMoistureChartData: any;

  constructor(public dataService: DataService) {

    this.dataService.sensorsData$.subscribe(data => {

      this.lightChartData = [{
        name: 'Light (lux)',
        series: data.map(item => {
          return {
            name: new Date(item.CreatedOn + 'Z'),
            value: item.Light,
          };
        })
      }];

      this.soilMoistureChartData = [{
        name: 'Soil Moisture',
        series: data.map(item => {
          return {
            name: new Date(item.CreatedOn + 'Z'),
            value: item.SoilMoisture || 0,
          };
        })
      }];
    });
  }
}
