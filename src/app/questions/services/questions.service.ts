import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Question} from '../../common/questions-common/models/question';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {AppCloudResponse} from '../../core/models/app-cloud-response';

@Injectable()
export class QuestionsService {
  constructor(private http: HttpClient) {

  }

  getFeatureQuestions(): Observable<Question[]> {
    return this.http.get<AppCloudResponse<Question[]>>(
      `${environment.api_server}/questions/featured?order=desc&sort=activity&site=stackoverflow`)
      .pipe(map(result => result.items));
  }
}
