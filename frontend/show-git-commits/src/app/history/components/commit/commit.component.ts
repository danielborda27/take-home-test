import { Component, Input } from '@angular/core';
import { IResponseCommit } from '../../models/commit.interface';

@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.css']
})
export class CommitComponent {
  @Input() commitResponse?: IResponseCommit;
  copied: boolean = false;

  copyHash(hash?: string): void {
    this.copied = !this.copied;
    navigator.clipboard.writeText(hash ?? '')
      .then(() => alert('Hash copied!'))
  }
}
