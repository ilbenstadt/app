import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomMaterialModule} from './custom-material.module';
import {PresenterService} from './presenter.service';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    CustomMaterialModule
  ],
  providers: [PresenterService]
})
export class SharedModule {
}
