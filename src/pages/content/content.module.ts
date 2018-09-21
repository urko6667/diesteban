import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { contentPage } from './content';

@NgModule({
  declarations: [
    contentPage,
  ],
  imports: [
    IonicPageModule.forChild(contentPage),
  ],
})
export class ContentPageModule {}
