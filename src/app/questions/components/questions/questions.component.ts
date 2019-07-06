import {Component, OnInit} from '@angular/core';
import {QuestionsService} from '../../services/questions.service';
import {Observable} from 'rxjs';
import {Question} from '../../../common/questions-common/models/question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  featureQuestions$: Observable<Question[]>;

  constructor(private questionsService: QuestionsService) {
  }

  ngOnInit() {
    this.featureQuestions$ = this.questionsService.getFeatureQuestions();
  }
}
