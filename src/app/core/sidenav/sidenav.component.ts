import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {NavItem} from '../model/nav-item';
import {Router} from '@angular/router';
import {NavService} from '../nav.service';

@Component({
  selector: 'ea-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output()
  navigate: EventEmitter<any> = new EventEmitter<any>();

  navItems: NavItem[];

  constructor(private _router: Router, private _navService: NavService) {
    this.navItems = [];
  }

  ngOnInit() {
    this._navService.getNavItems().subscribe((navItems: NavItem[]) => {
      this.navItems = navItems;
    });
  }

  navigateTo(navItem: NavItem): void {
    if (navItem.external) {
      window.open(navItem.url, '_blank');
    } else {
      this._router.navigate([navItem.url]);
    }
    this.navigate.emit();
  }

}
