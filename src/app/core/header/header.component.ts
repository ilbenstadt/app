import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ea-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  toggleMenu: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onMenuClick() {
    this.toggleMenu.emit();
  }

}
