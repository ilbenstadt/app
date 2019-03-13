import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import {EventAppData} from '../model/event-app-data';
import {EventDataService} from '../core/event-data.service';
import { StreamsData } from './model/streams-data';

@Injectable()
export class StreamsResolve implements Resolve<StreamsData> {
    constructor(
        private eventDataService: EventDataService,
    ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<StreamsData> {
    return this.eventDataService.getCachedEventAppData().pipe(
        map((event: EventAppData, index: number) => new StreamsData(event.workshopStreams, event.presenters)));
  }
}
