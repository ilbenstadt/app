import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {SidenavComponent} from './sidenav/sidenav.component';
import {HeaderComponent} from './header/header.component';
import {CustomMaterialModule} from '../shared/custom-material.module';
import {NavService} from './nav.service';
import {AgendaComponent} from '../agenda/agenda.component';
import {AgmCoreModule} from '@agm/core';
import {EventDataService} from './event-data.service';
import {HttpClientModule} from '@angular/common/http';
import {AgendaResolve} from '../agenda/agenda.resolve';
import {PushComponent} from './sidenav/push.component/push-notification.component';
import {PushService} from './sidenav/push.component/push-service';
import {StreamsResolve} from '../streams/streams.resolve';
import {StreamsComponent} from '../streams/streams.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCT-kDjXoGvNx8OCJWXuAQcnVmEY0rwOHw'
    }),
    RouterModule.forRoot([
      {
        path: '',
        component: AgendaComponent,
        resolve: {
          agendaData: AgendaResolve
        }
      },
      {
        path: 'streams',
        component: StreamsComponent,
        resolve: {
          streamsData: StreamsResolve
        }
      },
      {path: '', redirectTo: '/', pathMatch: 'full'}
    ]),
    CustomMaterialModule
  ],
  declarations: [SidenavComponent, HeaderComponent, PushComponent],
  exports: [RouterModule, SidenavComponent, HeaderComponent, PushComponent],
  providers: [NavService, EventDataService, PushService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
