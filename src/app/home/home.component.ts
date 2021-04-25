import { Component } from '@angular/core';

import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  lightChartData: any;
  soilMoistureChartData: any;
  triggeredByChartData: any;

  constructor(public dataService: DataService) {

    this.dataService.sensorsData$.subscribe(data => {

      this.lightChartData = [{
        name: 'Light (lux)',
        series: data
          .filter(item => item.TriggeredBy === 'BH1750')
          .map(item => {
            return {
              name: item.CreatedOn,
              value: item.Light,
            };
          })
      }];

      this.soilMoistureChartData = [{
        name: 'Soil Moisture',
        series: data
          .filter(item => item.TriggeredBy === 'YL69')
          .map(item => {
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
