import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponseCommit } from '../models/commit.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommitService {
  private _url: string = `${environment.baseUrl}/github/commits/danielborda27/take-home-test`
  // private _url: string = '/assets/mocks/response-commits.json'

  constructor(
    private _http: HttpClient
  ) { }

  getCommits(): Observable<IResponseCommit[]> {
    return this._http.get<IResponseCommit[]>(this._url)
  }
}
