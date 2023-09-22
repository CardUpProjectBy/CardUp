import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './main/components/card-list/card-list.component';

const routes: Routes = [
  {
    path: 'main',
    component: CardListComponent
  },
  {
    path: 'update',
    loadChildren: () => import('../app/main/components/card-detail/module/card-detail.module').then(m => m.CardDetailModule)
  },
  {
    path: 'activity',
    loadChildren: () => import('../app/main/components/activity/module/activity.module').then(m => m.ActivityModule)
  },
  { 
    path: '',   
    redirectTo: '/main', 
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
