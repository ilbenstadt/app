export class Presenter {
  private _id: number;
  private _name: string;
  private _position: string;
  private _description: string;
  private _organization: string;

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

  get position(): string {
    return this._position;
  }

  set position(value: string) {
    this._position = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get organization(): string {
    return this._organization;
  }

  set organization(value: string) {
    this._organization = value;
  }
}
