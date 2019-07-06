import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UserResolver} from './resolvers/user.resolver';

const routes: Routes = [
  {path: ':userId', resolve: {user: UserResolver}, component: UserDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
