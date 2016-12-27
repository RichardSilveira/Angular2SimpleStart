import {
  Routes,
  RouterModule, PreloadAllModules
} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule'
      }
    ]
  }
];

import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
