import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {DayComponent} from './day/day.component';
import {AgendaComponent} from './agenda.component';
import {TimeSlotComponent} from './time-slot/time-slot.component';
import {AgendaResolve} from './agenda.resolve';
import {AgendaService} from './agenda.service';
import {DayService} from './day/day.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [DayComponent, AgendaComponent, TimeSlotComponent],
  providers: [AgendaResolve, AgendaService, DayService]
})
export class AgendaModule { }
