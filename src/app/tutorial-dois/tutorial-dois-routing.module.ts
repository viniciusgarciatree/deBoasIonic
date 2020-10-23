import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialDoisPage } from './tutorial-dois.page';

const routes: Routes = [
  {
    path: '',
    component: TutorialDoisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorialDoisPageRoutingModule {}
