import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../models/question';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {

  @Input() questions: Question[] = [];
  constructor() { }

  ngOnInit() {
  }

}
