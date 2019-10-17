import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/post/list/list.component';
import { DetailComponent } from './components/post/detail/detail.component';
import { ActionComponent } from './components/post/action/action.component';

const routes: Routes = [
  { path: '',  pathMatch: 'full', redirectTo: 'posts' },
  { 
    path: 'posts',  
    children: [
    { path: '', component: ListComponent },
    { path: 'action', component: ActionComponent },
    { path: 'action/:id', component: ActionComponent },
    { path: ':id', component: DetailComponent },
  ] },
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
