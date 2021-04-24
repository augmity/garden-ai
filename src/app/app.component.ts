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
  triggeredByChartData: any;

  constructor(public dataService: DataService) {

    this.dataService.sensorsData$.subscribe(data => {

      this.lightChartData = [{
        name: 'Light (lux)',
        series: data.map(item => {
          return {
            name: item.CreatedOn,
            value: item.Light,
          };
        })
      }];

      this.soilMoistureChartData = [{
        name: 'Soil Moisture',
        series: data.map(item => {
          return {
            name: item.CreatedOn,
            value: item.SoilMoisture || 0,
          };
        })
      }];

      const triggeredByCount: any = {};
      for (const item of data) {
        if (item.TriggeredBy) {
          if (triggeredByCount[item.TriggeredBy]) {
            triggeredByCount[item.TriggeredBy]++;
          } else {
            triggeredByCount[item.TriggeredBy] = 1; 
          }
        }
      }
      this.triggeredByChartData = Object.keys(triggeredByCount).map(item => {
        return {
          name: item,
          value: triggeredByCount[item]
        }
      });

    });
  }
}
