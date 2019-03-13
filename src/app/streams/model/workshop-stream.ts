export class WorkshopStream {
  private _id: number;
  private _name: string;
  private _description: string;
  private _leaders: number[] | string;
  private _room: string;

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

  get leaders(): number[]|string {
    return this._leaders;
  }

  set leaders(value: number[]|string) {
    this._leaders = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get room(): string {
    return this._room;
  }

  set room(value: string) {
    this._room = value;
  }
}
