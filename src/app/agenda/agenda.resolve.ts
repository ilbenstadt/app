import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import {EventAppData} from '../model/event-app-data';
import {EventDataService} from '../core/event-data.service';
import {Agenda} from './model/agenda';
import { AgendaData } from './model/agenda-data';

@Injectable()
export class AgendaResolve implements Resolve<AgendaData> {
    constructor(
        private eventDataService: EventDataService,
    ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<AgendaData> {
    return this.eventDataService.getCachedEventAppData().pipe(
        map((event: EventAppData, index: number) => new AgendaData(event.agenda, event.presenters)));
  }
}
