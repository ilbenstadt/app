import { NgModule } from '@angular/core';
import { StreamsComponent } from './streams.component';
import { StreamsResolve } from './streams.resolve';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [StreamsComponent],
  providers: [StreamsResolve]
})
export class StreamsModule { }
