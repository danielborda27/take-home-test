import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { HistoryRoutingModule } from './history-routing.module';
import { CommitsListComponent } from './components/commits-list/commits-list.component';
import { CommitComponent } from './components/commit/commit.component';
import { CommitService } from './services/commit.service';


@NgModule({
  declarations: [
    CommitsListComponent,
    CommitComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HistoryRoutingModule
  ],
  providers: [
    CommitService
  ]
})
export class HistoryModule { }
