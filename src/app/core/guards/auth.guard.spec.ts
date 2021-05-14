import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth.service';
import { AuthServiceMock } from '../services/auth.service.spec';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {

  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{ provide: AuthService, useValue: new AuthServiceMock() }]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('canActivate test', () => {
    guard.canActivate();
    expect(guard).toBeTruthy();
  });

  it('canLoad test', () => {
    guard.canLoad();
    expect(guard).toBeTruthy();
  });

});
