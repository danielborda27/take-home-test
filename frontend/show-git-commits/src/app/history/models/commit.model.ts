import { ICommit, ICommitAuthor, IResponseCommit, ITree } from './commit.interface';

export class ResponseCommit implements IResponseCommit {
  url!: string;
  sha!: string;
  node_id!: string;
  html_url!: string;
  comments_url!: string;
  commit!: ICommit;
  author!: ICommitAuthor;
  committer!: ICommitAuthor;
  parents!: ITree[];

  constructor() {}
}