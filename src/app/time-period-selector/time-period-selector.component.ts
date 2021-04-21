import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TimePeriodType } from './models/TimePeriodType';

@Component({
  selector: 'time-period-selector',
  templateUrl: './time-period-selector.component.html',
  styleUrls: ['./time-period-selector.component.scss']
})
export class TimePeriodSelectorComponent {

  @Input() model: TimePeriodType = 'day';
  @Output() modelChange = new EventEmitter<TimePeriodType>();

  setModel(value: TimePeriodType) {
    this.model = value;
    this.modelChange.emit(value);
  }
}
