export class NavItem {
  private _label: string;
  private _url: string;
  private _external = false;

  constructor(label: string, url: string, external?: boolean) {
    this._label = label;
    this._url = url;
    this._external = external;
  }

  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get external(): boolean {
    return this._external;
  }

  set external(value: boolean) {
    this._external = value;
  }
}
