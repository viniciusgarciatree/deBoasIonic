import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialDoisPageRoutingModule } from './tutorial-dois-routing.module';

import { TutorialDoisPage } from './tutorial-dois.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialDoisPageRoutingModule
  ],
  declarations: [TutorialDoisPage]
})
export class TutorialDoisPageModule {}
