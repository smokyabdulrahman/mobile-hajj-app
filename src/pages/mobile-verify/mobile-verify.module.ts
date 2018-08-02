import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TranslateModule } from '@ngx-translate/core';

import { MobileVerifyPage } from './mobile-verify';

@NgModule({
  declarations: [MobileVerifyPage],
  imports: [
    IonicPageModule.forChild(MobileVerifyPage),
    TranslateModule.forChild()
  ],
  exports: [MobileVerifyPage]
})
export class MobileVerifyPageModule {}
