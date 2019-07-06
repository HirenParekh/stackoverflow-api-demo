import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppCloudResponse} from '../../core/models/app-cloud-response';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {User} from '../models/user';
import {Question} from '../../common/questions-common/models/question';
import {TopTag} from '../models/top-tag';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {

  }

  getUserDetailsById(userId: number): Observable<User> {
    return this.http.get<AppCloudResponse<User[]>>(
      `${environment.api_server}/users/${userId}?order=desc&sort=reputation&site=stackoverflow`)
      .pipe(map(result => result.items[0]));
  }

  getQuestionsbyUserId(userId: number): Observable<Question[]> {
    return this.http.get<AppCloudResponse<Question[]>>(
      `${environment.api_server}/users/${userId}/questions?order=desc&sort=votes&site=stackoverflow`
    ).pipe(map(result => result.items));
  }

  getTopTagsbyUserId(userId: number): Observable<TopTag[]> {
    return this.http.get<AppCloudResponse<TopTag[]>>(
      `${environment.api_server}/users/${userId}/top-tags?site=stackoverflow`
    ).pipe(map(result => result.items));
  }
}
