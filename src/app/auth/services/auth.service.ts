import {Injectable} from '@angular/core';
import {Observable, of, pipe} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {
  }

  isLoggedin(): boolean {
    const isLogin = localStorage.getItem('isLogin');
    return isLogin && isLogin === '1';
  }

  login(): Observable<any> {
    localStorage.setItem('isLogin', '1');
    return of(true).pipe(delay(100));
  }

  logout(): void {
    localStorage.removeItem('isLogin');
    window.location.href = '';
  }
}
