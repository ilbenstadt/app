import {Injectable} from '@angular/core';
import {Presenter} from '../agenda/model/presenter';

@Injectable()
export class PresenterService {

  constructor() { }

  public getDisplayablePresenters(allPresenters: Presenter[], presenters: any): string {
    if (!presenters) {
      return '';
    }
    if (typeof presenters !== 'string') {
      const presentersNames = this.findPresenetersByIds(allPresenters, presenters).map((presenter: Presenter) => presenter.name);
      return this.concatPresentersNames(presentersNames);
    }
    return presenters;
  }

  public getPresentersIcon(presenters: any): string {
    if (presenters && typeof presenters !== 'string' && presenters.length > 1) {
      return 'people';
    }
    return 'person';
  }

  private findPresenetersByIds(allPresenters: Presenter[], presenterIds: number[]): Presenter[] {
    if (!allPresenters || !presenterIds) {
      return [];
    }
    return allPresenters.filter((presenter: Presenter) => presenterIds.indexOf(presenter.id) !== -1);
  }

  private concatPresentersNames(presentersNames: string[]): string {
    if (presentersNames.length === 0) {
      return '';
    }

    let result = '';

    if (presentersNames.length > 1) {
      result += presentersNames.slice(0, presentersNames.length - 1).join(', ') + ' and ';
    }

    return result + presentersNames[presentersNames.length - 1];
  }

}
