import {Component, OnInit, Input} from '@angular/core';
import {TimeSlot} from '../model/time-slot';
import {AgendaService} from '../agenda.service';
import {PresenterService} from '../../shared/presenter.service';

@Component({
  selector: 'ea-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.scss']
})
export class TimeSlotComponent implements OnInit {

  @Input()
  timeSlot: TimeSlot;
  presenters: string;

  constructor(private agendaService: AgendaService, private presenterService: PresenterService) { }

  ngOnInit() {
    this.presenters = this.presenterService.getDisplayablePresenters(this.agendaService.getPresenters(), this.timeSlot.presenters);
  }

}
