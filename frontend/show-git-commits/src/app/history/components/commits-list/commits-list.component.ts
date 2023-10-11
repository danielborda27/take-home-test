import { Component } from '@angular/core';
import { IResponseCommit } from '../../models/commit.interface';
import { CommitService } from '../../services/commit.service';

@Component({
  selector: 'app-commits-list',
  templateUrl: './commits-list.component.html',
  styleUrls: ['./commits-list.component.css']
})
export class CommitsListComponent {
  commitsList: IResponseCommit[] = []

  constructor(
    private commitService: CommitService
  ) {
    this.commitService.getCommits()
      .subscribe(response => this.commitsList = response)
  }
}
