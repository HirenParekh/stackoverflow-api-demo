import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/user';
import {Question} from '../../../common/questions-common/models/question';
import {Observable} from 'rxjs';
import {UsersService} from '../../services/users.service';
import {TopTag} from '../../models/top-tag';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User;
  userQuestions$: Observable<Question[]>;
  topTags$: Observable<TopTag[]>;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private usersService: UsersService) {
  }

  ngOnInit() {
    this.activatedRoute.data
      .subscribe((data: { user: User }) => {
        console.log(data);
        this.user = data.user;
        this.userQuestions$ = this.usersService.getQuestionsbyUserId(this.user.user_id);
        this.topTags$ = this.usersService.getTopTagsbyUserId(this.user.user_id);
      });
  }

}
