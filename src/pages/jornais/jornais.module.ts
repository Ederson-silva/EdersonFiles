import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JornaisPage } from './jornais';

@NgModule({
  declarations: [
    JornaisPage,
  ],
  imports: [
    IonicPageModule.forChild(JornaisPage),
  ],
})
export class JornaisPageModule {}
