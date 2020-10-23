import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialTresPageRoutingModule } from './tutorial-tres-routing.module';

import { TutorialTresPage } from './tutorial-tres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialTresPageRoutingModule
  ],
  declarations: [TutorialTresPage]
})
export class TutorialTresPageModule {}
