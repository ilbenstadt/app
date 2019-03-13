import {TimeSlot} from './time-slot';

export class Day {
  private _id: number;
  private _name: string;
  private _date: Date;
  private _description: string;
  private _timeSlots: TimeSlot[];

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get timeSlots(): TimeSlot[] {
    return this._timeSlots;
  }

  set timeSlots(value: TimeSlot[]) {
    this._timeSlots = value;
  }
}
