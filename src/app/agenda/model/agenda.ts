import {Day} from './day';
import {Stream} from './stream';

export class Agenda {
  private _days: Day[];
  private _streams: Stream[];

  get days(): Day[] {
    return this._days;
  }

  set days(value: Day[]) {
    this._days = value;
  }

  get streams(): Stream[] {
    return this._streams;
  }

  set streams(value: Stream[]) {
    this._streams = value;
  }
}
