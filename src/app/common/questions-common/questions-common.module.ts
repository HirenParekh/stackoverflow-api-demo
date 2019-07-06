import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { SingleQuestionComponent } from './components/single-question/single-question.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [QuestionsListComponent, SingleQuestionComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [QuestionsListComponent]
})
export class QuestionsCommonModule { }
