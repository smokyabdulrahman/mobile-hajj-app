import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnnouncementFormPage } from './announcement-form';

@NgModule({
  declarations: [
    AnnouncementFormPage,
  ],
  imports: [
    IonicPageModule.forChild(AnnouncementFormPage),
  ],
})
export class AnnouncementFormPageModule {}
