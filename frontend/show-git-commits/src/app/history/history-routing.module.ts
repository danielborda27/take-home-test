import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitsListComponent } from './components/commits-list/commits-list.component';

const routes: Routes = [
  {
    path: '',
    component: CommitsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
