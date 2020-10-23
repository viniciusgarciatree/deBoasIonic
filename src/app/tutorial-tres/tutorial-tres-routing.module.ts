import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialTresPage } from './tutorial-tres.page';

const routes: Routes = [
  {
    path: '',
    component: TutorialTresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorialTresPageRoutingModule {}
