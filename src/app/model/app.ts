export class App {
  private _mainTitle: string;

  get mainTitle(): string {
    return this._mainTitle;
  }

  set mainTitle(value: string) {
    this._mainTitle = value;
  }
}
