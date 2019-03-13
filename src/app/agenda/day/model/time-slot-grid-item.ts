import {TimeSlot} from '../../model/time-slot';

export class TimeSlotGridItem {
  private _timeSlot: TimeSlot;
  private _rowSpan: number;
  private _colSpan: number;
  private _bgColor: string;
  private _textColor: string;

  constructor(timeSlot: TimeSlot, rowSpan: number, colSpan: number, bgColor: string, textColor: string) {
    this._timeSlot = timeSlot;
    this._colSpan = colSpan;
    this._rowSpan = rowSpan;
    this._bgColor = bgColor;
    this._textColor = textColor;
  }

  get timeSlot(): TimeSlot {
    return this._timeSlot;
  }

  set timeSlot(value: TimeSlot) {
    this._timeSlot = value;
  }

  get rowSpan(): number {
    return this._rowSpan;
  }

  set rowSpan(value: number) {
    this._rowSpan = value;
  }

  get colSpan(): number {
    return this._colSpan;
  }

  set colSpan(value: number) {
    this._colSpan = value;
  }

  get bgColor(): string {
    return this._bgColor;
  }

  set bgColor(value: string) {
    this._bgColor = value;
  }

  get textColor(): string {
    return this._textColor;
  }

  set textColor(value: string) {
    this._textColor = value;
  }
}
