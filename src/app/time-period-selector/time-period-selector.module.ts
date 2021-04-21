import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { TimePeriodSelectorComponent } from './time-period-selector.component';

@NgModule({
  declarations: [
    TimePeriodSelectorComponent
  ],
  imports: [
    CommonModule,
    NzTypographyModule,
    NzDividerModule,
  ],
  exports: [
    TimePeriodSelectorComponent
  ]
})
export class TimePeriodSelectorModule {}
