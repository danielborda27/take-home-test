export interface IResponseCommit {
  url: string;
  sha: string;
  node_id: string;
  html_url: string;
  comments_url: string;
  commit: ICommit;
  author: ICommitAuthor;
  committer: ICommitAuthor;
  parents: ITree[];
}

export interface ICommitAuthor {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface ICommit {
  url: string;
  author: IAuthor;
  committer: IAuthor;
  message: string;
  tree: ITree;
  comment_count: number;
  verification: IVerification;
}

export interface IAuthor {
  name: string;
  email: string;
  date: string;
}

export interface ITree {
  url: string;
  sha: string;
}

export interface IVerification {
  verified: boolean;
  reason: string;
  signature: null;
  payload: null;
}