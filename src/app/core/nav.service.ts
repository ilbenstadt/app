import {Injectable} from '@angular/core';
import {NavItem} from './model/nav-item';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class NavService {
  private _navItems: NavItem[];

  constructor() {
    this._navItems = [];

    const navItem2: NavItem = new NavItem('Agenda', '/');
    this._navItems.push(navItem2);

    const navItem3: NavItem = new NavItem('Workshops', '/streams');
    this._navItems.push(navItem3);
  }

  getNavItems(): Observable<NavItem[]> {
    return Observable.of(this._navItems);
  }

}
