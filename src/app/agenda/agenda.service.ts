import {Injectable} from '@angular/core';
import {Agenda} from './model/agenda';
import {Stream} from './model/stream';
import {Presenter} from './model/presenter';
import {Day} from './model/day';
import {BasicComparator, ValueComparator} from 'ts-comparators';
import {getCurrentDate, formatDateForDay} from '../shared/date-utils';

@Injectable()
export class AgendaService {

  private _agenda: Agenda;
  private _presenters: Presenter[];

  private streamIdsComparator = new BasicComparator<number>();

  constructor() { }

  public getAgenda(): Agenda {
    return this._agenda;
  }

  public prepareAndSetAgenda(agenda: Agenda) {
    this.prepareAgendaForProcessing(agenda);
    this._agenda = agenda;
  }

  public getPresenters(): Presenter[] {
    return this._presenters;
  }

  public setPresenters(presenters: Presenter[]) {
    this._presenters = presenters;
  }

  private prepareAgendaForProcessing(agenda: Agenda) {
    if (this.isValidAgenda(agenda)) {
      for (const day of agenda.days) {
        day.date = new Date(day.date);

        for (const timeSlot of day.timeSlots) {
          timeSlot.streams = timeSlot.streams || [];
          timeSlot.streams.sort((stream1: number, stream2: number) => this.streamIdsComparator.compare(stream1, stream2));
        }
      }

      const daysComparator = new ValueComparator<Day, Date>(day => day.date, new BasicComparator<Date>());
      agenda.days.sort((day1: Day, day2: Day) => daysComparator.compare(day1, day2));
    }
  }

  public isValidAgenda(agenda: Agenda): boolean {
    return agenda && agenda.days && agenda.days.length > 0;
  }

  public findStreamsByIds(streamIds: number[]): Stream[] {
    if (!streamIds) {
      return [];
    }
    return this.getAgenda().streams.filter((stream: Stream) => streamIds.indexOf(stream.id) !== -1);
  }

  public getStreamsForDay(day: Day): Stream[] {
    const streamIds = [];

    for (const timeSlot of day.timeSlots) {
      timeSlot.streams.reduce((resultStreamIds: number[], streamId: number, index: number, slotStreams: number[]) => {
        if (resultStreamIds.indexOf(streamId) === -1) {
          resultStreamIds.push(streamId);
        }
        return resultStreamIds;
      }, streamIds);
    }

    streamIds.sort((stream1: number, stream2: number) => this.streamIdsComparator.compare(stream1, stream2));

    return this.findStreamsByIds(streamIds);
  }

  public getSelectedDayIndex(): number {
    const currentDate = new Date(formatDateForDay(getCurrentDate()));
    let selectedDayIndex = 0;

    if (this.getAgenda() && this.getAgenda().days) {
      selectedDayIndex = this.getAgenda().days.reduce((dayIndex: number, day: Day, currentIndex: number, days: Day[]) => {
        if (currentDate >= day.date) {
          return currentIndex;
        }
        return dayIndex;
      }, 0);
    }

    return selectedDayIndex;
  }

}
