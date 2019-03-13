import {Presenter} from '../../agenda/model/presenter';
import {WorkshopStream} from './workshop-stream';

export class StreamsData {
  private _workshopStreams: WorkshopStream[];
  private _presenters: Presenter[];

  constructor (workshopStreams: WorkshopStream[], presenters: Presenter[]) {
    this._workshopStreams = workshopStreams;
    this._presenters = presenters;
  }

  get workshopStreams(): WorkshopStream[] {
    return this._workshopStreams;
  }

  set workshopStreams(value: WorkshopStream[]) {
    this._workshopStreams = value;
  }

  get presenters(): Presenter[] {
    return this._presenters;
  }

  set presenters(value: Presenter[]) {
    this._presenters = value;
  }
}
