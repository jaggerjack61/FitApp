import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'push',
    loadChildren: () => import('./push/push.module').then( m => m.PushPageModule)
  },
  {
    path: 'pull',
    loadChildren: () => import('./pull/pull.module').then( m => m.PullPageModule)
  },
  {
    path: 'legs',
    loadChildren: () => import('./legs/legs.module').then( m => m.LegsPageModule)
  },
  {
    path: 'abs',
    loadChildren: () => import('./abs/abs.module').then( m => m.AbsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
