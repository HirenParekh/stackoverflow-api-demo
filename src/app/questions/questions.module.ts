import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionsCommonModule } from '../common/questions-common/questions-common.module';
import { QuestionsService } from './services/questions.service';

@NgModule({
  declarations: [QuestionsComponent],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    QuestionsCommonModule
  ],
  providers: [QuestionsService]
})
export class QuestionsModule {
}
