import {Agenda} from './agenda';
import {Presenter} from './presenter';

export class AgendaData {
  private _agenda: Agenda;
  private _presenters: Presenter[];

  constructor (agenda: Agenda, presenters: Presenter[]) {
    this._agenda = agenda;
    this._presenters = presenters;
  }

  get agenda(): Agenda {
    return this._agenda;
  }

  set agenda(value: Agenda) {
    this._agenda = value;
  }

  get presenters(): Presenter[] {
    return this._presenters;
  }

  set presenters(value: Presenter[]) {
    this._presenters = value;
  }
}
