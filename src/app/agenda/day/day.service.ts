import {Injectable} from '@angular/core';
import {TimeSlot} from '../model/time-slot';
import {Stream} from '../model/stream';
import {TimeSlotGridItem} from './model/time-slot-grid-item';
import {PropertyComparator, StringComparator, CustomComparator} from 'ts-comparators';
import {Day} from '../model/day';
import {getCurrentDate, formatDateForDay, formatDateForHour} from '../../shared/date-utils';

@Injectable()
export class DayService {

  constructor() { }

  public getSlotsMap(timeSlots: TimeSlot[], streams: Stream[]): Object {
    const slotsComparator = new PropertyComparator<TimeSlot, 'startTime'>('startTime', new StringComparator())
      .then(new CustomComparator<TimeSlot>((value1: TimeSlot, value2: TimeSlot) => value1.streams[0] - value2.streams[0]));
    timeSlots.sort((slot1: TimeSlot, slot2: TimeSlot) => slotsComparator.compare(slot1, slot2));

    const slotsMap = {};

    for (const timeSlot of timeSlots) {
      slotsMap[timeSlot.startTime] = slotsMap[timeSlot.startTime] || [];

      const rowSpan = 1;
      const colSpan = this.resolveColSpan(timeSlot.streams, streams);
      const bgColor = this.resolveBackgroundColor(timeSlot.streams, streams);
      const textColor = this.resolveTextColor(bgColor);

      slotsMap[timeSlot.startTime].push(new TimeSlotGridItem(timeSlot, rowSpan, colSpan, bgColor, textColor));
    }

    return slotsMap;
  }

  private resolveColSpan(streamIds: number[], streams: Stream[]): number {
    if (streamIds.length === 0) {
      return streams.length;
    }

    return streamIds.length;
  }

  private resolveBackgroundColor(streamIds: number[], streams: Stream[]): string {
    if (streamIds.length !== 1) {
      return '';
    }

    const streamObj = streams.find((stream: Stream) => stream.id === streamIds[0]);
    return streamObj ? streamObj.color : '';
  }

  public resolveTextColor(bgColor: string): string {
    return bgColor && this.getContrastYIQ(bgColor) < 128 ? 'white' : 'black';
  }

  private getContrastYIQ(hexcolor: string): number {
    const red = parseInt(hexcolor.substr(1, 2), 16);
    const green = parseInt(hexcolor.substr(3, 2), 16);
    const blue = parseInt(hexcolor.substr(5, 2), 16);
    return ((red * 299) + (green * 587) + (blue * 114)) / 1000;
  }

  public isCurrentDay(day: Day): boolean {
    const currentDate = formatDateForDay(getCurrentDate());
    const checkedDate = formatDateForDay(day.date);
    return checkedDate === currentDate;
  }

  public hasDayStarted(day: Day): boolean {
    const currentHour = formatDateForHour(getCurrentDate());
    const firstSlotHour = day.timeSlots[0].startTime;
    return currentHour >= firstSlotHour;
  }

  public getCurrentTimeSlotHour(day: Day): string {
    const currentDate = getCurrentDate();
    const currentHour = formatDateForHour(currentDate);
    const hour = day.timeSlots.reduce((resultHour: string, timeSlot: TimeSlot, currentIndex: number, timeSlots: TimeSlot[]) => {
      if (currentHour >= timeSlot.startTime) {
        return timeSlot.startTime;
      }
      return resultHour;
    }, '');

    return hour;
  }

}
