import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialUmPage } from './tutorial-um.page';

const routes: Routes = [
  {
    path: '',
    component: TutorialUmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorialUmPageRoutingModule {}
