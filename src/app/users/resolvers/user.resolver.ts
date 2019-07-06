import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {User} from '../models/user';
import {UsersService} from '../services/users.service';
import {Observable} from 'rxjs';

@Injectable()
export class UserResolver implements Resolve<User> {
  constructor(private usersService: UsersService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Observable<never> {
    const userId = route.paramMap.get('userId');
    return this.usersService.getUserDetailsById(+userId);
  }
}
