import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { CommitsListComponent } from './components/commits-list/commits-list.component';
import { CommitComponent } from './components/commit/commit.component';


@NgModule({
  declarations: [
    CommitsListComponent,
    CommitComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule
  ]
})
export class HistoryModule { }
