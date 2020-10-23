import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tutorial-um',
    pathMatch: 'full'
  },
  {
    path: 'tutorial-um',
    loadChildren: () => import('./tutorial-um/tutorial-um.module').then( m => m.TutorialUmPageModule)
  },
  {
    path: 'tutorial-dois',
    loadChildren: () => import('./tutorial-dois/tutorial-dois.module').then( m => m.TutorialDoisPageModule)
  },
  {
    path: 'tutorial-tres',
    loadChildren: () => import('./tutorial-tres/tutorial-tres.module').then( m => m.TutorialTresPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
