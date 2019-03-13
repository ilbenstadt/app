import {NgModule} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatTabsModule,
  MatGridListModule,
  MatCardModule
} from '@angular/material';


@NgModule({
  declarations: [
  ],
  imports: [
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatGridListModule,
    LayoutModule,
    MatCardModule
  ],
  exports: [
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatGridListModule,
    LayoutModule,
    MatCardModule
  ],
  providers: [
  ],
})
export class CustomMaterialModule { }
