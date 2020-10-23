import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialUmPageRoutingModule } from './tutorial-um-routing.module';

import { TutorialUmPage } from './tutorial-um.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialUmPageRoutingModule
  ],
  declarations: [TutorialUmPage]
})
export class TutorialUmPageModule {}
