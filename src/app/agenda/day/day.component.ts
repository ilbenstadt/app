import {Component, OnInit, Input, ElementRef, ViewChild} from '@angular/core';
import {Day} from '../model/day';
import {AgendaService} from '../agenda.service';
import {Stream} from '../model/stream';
import {DayService} from './day.service';

@Component({
  selector: 'ea-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  @ViewChild('dayGrid')
  dayGridElement: ElementRef;

  @Input()
  day: Day;

  streams: Stream[] = [];
  hours: string[] = [];
  slotsMap: Object = {};
  gridTemplateColumns = '1fr';

  constructor(private agendaService: AgendaService, private dayService: DayService) {
  }

  ngOnInit() {
    this.streams = this.agendaService.getStreamsForDay(this.day);
    this.gridTemplateColumns = '1fr '.repeat(this.streams.length);
    this.slotsMap = this.dayService.getSlotsMap(this.day.timeSlots, this.streams);
    this.hours = Object.keys(this.slotsMap);
  }

  afterDayTabChanged() {
    if (this.dayService.isCurrentDay(this.day) && this.dayService.hasDayStarted(this.day)) {
      const currentTimeSlotHour = this.dayService.getCurrentTimeSlotHour(this.day);
      this.scrollToRow(this.getIdForTimeRow(currentTimeSlotHour));
    }
  }

  private scrollToRow(rowId: string) {
    const row = this.dayGridElement.nativeElement.querySelector(`[id="${rowId}"]`);
    if (row) {
      row.scrollIntoView();
    }
  }

  getIdForTimeRow(hour: string): string {
    return hour.replace(':', '');
  }

  resolveTextColor(bgColor: string): string {
    return this.dayService.resolveTextColor(bgColor);
  }

}
