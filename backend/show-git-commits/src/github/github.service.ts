import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { IResponseCommit } from './commit.interface';

@Injectable()
export class GithubService {
  private readonly apiUrl = 'https://api.github.com';

  async getCommits(owner: string, repo: string): Promise<IResponseCommit[]> {
    return await axios.get(`${this.apiUrl}/repos/${owner}/${repo}/commits`);
  }
}
