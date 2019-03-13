import {App} from './app';

export class GeneralMetadata {
  private _app: App;

  get app(): App {
    return this._app;
  }

  set app(value: App) {
    this._app = value;
  }
}
