import { Component } from '@angular/core';

// import { SensorsData } from './models/SensorsData';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  chartData: any;

  constructor(public dataService: DataService) {

    this.dataService.sensorsData$.subscribe(data => {

      this.chartData = [{
        name: 'Light (lux)',
        series: data.map(item => {
          return {
            name: new Date(item.CreatedOn + 'Z'),
            value: item.Light,
          };
        })
      }];
    })
  }
}
