import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GithubService } from './github.service';
import { IResponseCommit } from './commit.interface';

@ApiTags('commits')
@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('commits/:owner/:repo')
  @ApiOperation({ summary: 'Get commits for a GitHub repository' })
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 404, description: 'Repository not found' })
  async getCommits(
    @Param('owner') owner: string,
    @Param('repo') repo: string,
  ): Promise<IResponseCommit[]> {
    return this.githubService.getCommits(owner, repo);
  }
}
