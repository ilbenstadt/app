import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable()
export class PushService {

  constructor(private http: Http) {}

  public addPushSubscriber(subscriber: PushSubscription){
    return this.http
        .post(API_URL + '/registerSubscription', subscriber)
        .map(response => {
            console.log(response.json());
            return;
        })
        .catch(this.handleError);
  }

private handleError (error: Response | any) {
  console.error('PushService::handleError', error);
  return Observable.throw(error);
}
}