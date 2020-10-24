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
  {
    path: 'objetivos',
    loadChildren: () => import('./objetivos/objetivos.module').then( m => m.ObjetivosPageModule)
  },
  {
    path: 'player',
    loadChildren: () => import('./player/player.module').then( m => m.PlayerPageModule)
  },
  {
    path: 'estatisticas',
    loadChildren: () => import('./estatisticas/estatisticas.module').then( m => m.EstatisticasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
