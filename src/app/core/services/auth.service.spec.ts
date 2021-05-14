import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AuthService } from './auth.service';

export class AuthServiceMock {

  login() { }
  logout() { }
  get isLoggedIn() {
    return of(true);
  }
}

describe('AuthService', () => {

  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule] });
    service = TestBed.inject(AuthService);
  });

  it('get isLoggedIn', () => {
    expect(service.isLoggedIn).toBeTruthy();
  });

  it('logout valid user', () => {
    service.login({ userName: 'jack', password: '1234' });
    expect(service).toBeTruthy();
  });

  it('logout valid user', () => {
    service.login({ userName: 'jack', password: '1234' });
    expect(service).toBeTruthy();
  });

  it('logout test', () => {
    service.logout();
    expect(service).toBeTruthy();
  });

});
