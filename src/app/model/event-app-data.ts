import {GeneralMetadata} from './general-metadata';
import {Agenda} from '../agenda/model/agenda';
import {WorkshopStream} from '../streams/model/workshop-stream';
import { Presenter } from '../agenda/model/presenter';

export class EventAppData {
  private _general: GeneralMetadata;
  private _agenda: Agenda;
  private _presenters: Presenter[];
  private _workshopStreams: WorkshopStream[];

  get general(): GeneralMetadata {
    return this._general;
  }

  set general(value: GeneralMetadata) {
    this._general = value;
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

  get workshopStreams(): WorkshopStream[] {
    return this._workshopStreams;
  }

  set workshopStreams(value: WorkshopStream[]) {
    this._workshopStreams = value;
  }
}
