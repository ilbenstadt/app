import {Component, OnInit, ViewChildren, QueryList} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Agenda} from './model/agenda';
import {AgendaService} from './agenda.service';
import {DayComponent} from './day/day.component';

@Component({
  selector: 'ea-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  @ViewChildren(DayComponent)
  dayComponents: QueryList<DayComponent>;

  agenda: Agenda;
  selectedTabIndex: number;
  isAgendaAvailable: boolean;

  readonly SWIPE_ACTION = {
    LEFT: 'LEFT',
    RIGHT: 'RIGHT'
  };

  constructor(private route: ActivatedRoute, private agendaService: AgendaService) { }

  ngOnInit() {
    const agendaData = this.route.snapshot.data['agendaData'];
    this.agenda = agendaData.agenda;
    this.agendaService.prepareAndSetAgenda(this.agenda);
    this.agendaService.setPresenters(agendaData.presenters);
    this.selectedTabIndex = this.agendaService.getSelectedDayIndex();
    this.isAgendaAvailable = this.agendaService.isValidAgenda(this.agenda);
  }

  scrollToCurrentTime() {
    this.dayComponents.forEach((dayComponent: DayComponent) => dayComponent.afterDayTabChanged());
  }

  swipeTab(currentIndex: number, action: string): boolean {
    if (currentIndex > this.agenda.days.length || currentIndex < 0) {
      return false;
    }

    let nextTabIndex = 0;

    if (action === this.SWIPE_ACTION.RIGHT) {
      const isFirstTab = currentIndex === 0;
      nextTabIndex = isFirstTab ? this.agenda.days.length - 1 : currentIndex - 1;
    }

    if (action === this.SWIPE_ACTION.LEFT) {
      const isLastTab = currentIndex === this.agenda.days.length - 1;
      nextTabIndex = isLastTab ? 0 : currentIndex + 1;
    }

    this.selectedTabIndex = nextTabIndex;
    return true;
  }

}
