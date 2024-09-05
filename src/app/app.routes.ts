import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MyTasksListComponent } from './components/my-tasks-list/my-tasks-list.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'myTasksList', component: MyTasksListComponent, pathMatch: 'full' },
];
