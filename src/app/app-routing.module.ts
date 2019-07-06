import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './auth/components/login/login.component';
import {AuthGuard} from './auth/guards/auth.guard';
import {LoginGuard} from './auth/guards/login.guard';
import {HomeComponent} from './home/components/home/home.component';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], component: HomeComponent, children: [
      {path: '', redirectTo: 'questions', pathMatch: 'full'},
      {
        path: `questions`,
        loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule)
      },
      {
        path: `users`,
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      }
    ]
  },
  {
    path: 'login', canActivate: [LoginGuard], component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
