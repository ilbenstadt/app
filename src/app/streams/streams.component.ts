import {Component, OnInit} from '@angular/core';
import {StreamsData} from './model/streams-data';
import {ActivatedRoute} from '@angular/router';
import {PresenterService} from '../shared/presenter.service';
import {WorkshopStream} from './model/workshop-stream';

@Component({
  selector: 'ea-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss']
})
export class StreamsComponent implements OnInit {

  streamsData: StreamsData;
  areStreamsAvailable: boolean;

  constructor(private route: ActivatedRoute, private presenterService: PresenterService) { }

  ngOnInit() {
    this.streamsData = this.route.snapshot.data['streamsData'];
    this.areStreamsAvailable = this.streamsData.workshopStreams && this.streamsData.workshopStreams.length > 0;
  }

  getDisplayablePresenters(workshopStream: WorkshopStream): string {
    return this.presenterService.getDisplayablePresenters(this.streamsData.presenters, workshopStream.leaders);
  }

  getPresentersIcon(workshopStream: WorkshopStream): string {
    return this.presenterService.getPresentersIcon(workshopStream.leaders);
  }

}
