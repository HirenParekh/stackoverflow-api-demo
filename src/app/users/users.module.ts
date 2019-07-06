import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersRoutingModule} from './users-routing.module';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UsersService} from './services/users.service';
import {UserResolver} from './resolvers/user.resolver';
import {QuestionsCommonModule} from '../common/questions-common/questions-common.module';
import {UserTopTagsComponent} from './components/user-top-tags/user-top-tags.component';
import {SingleTagComponent} from './components/single-tag/single-tag.component';

@NgModule({
  declarations: [
    UserDetailsComponent,
    UserTopTagsComponent,
    SingleTagComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    QuestionsCommonModule
  ],
  providers: [UsersService, UserResolver]
})
export class UsersModule {
}
