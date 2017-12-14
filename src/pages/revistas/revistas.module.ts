import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RevistasPage } from './revistas';

@NgModule({
  declarations: [
    RevistasPage,
  ],
  imports: [
    IonicPageModule.forChild(RevistasPage),
  ],
})
export class RevistasPageModule {}
