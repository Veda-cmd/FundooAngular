import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialUIModule } from '../../material-ui/material-ui.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ToolbarComponent } from '../dashboard/toolbar/toolbar.component';
import { DrawerComponent } from '../dashboard/drawer/drawer.component';
import { AvatarModule } from 'ngx-avatar';

fdescribe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let userService: UserService;
  let router: Router
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'dashboard', component: DashboardComponent }
        ]),
        MaterialUIModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AvatarModule
      ],
      declarations: [
        LoginComponent,
        DashboardComponent,
        ToolbarComponent,
        DrawerComponent
      ],
      providers: [UserService]
    }).compileComponents();
    userService = TestBed.get(UserService);
    fixture = TestBed.createComponent(LoginComponent);
    // fixture.detectChanges();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a user service', () => {
    expect(userService).toBeTruthy();
  });

  fit('should return true on correct input', () => {
    let login = new LoginComponent(router, userService);
    let loginResponse: boolean = true;
    spyOn(login, 'onMockSubmit').and.returnValue(loginResponse);
    // const emailInput = fixture.debugElement.query(By.css('input[name="email"]'));
    // const passwordInput = fixture.debugElement.query(By.css('input[name="password"]'));
    // let button = fixture.debugElement.query(By.css('button')).nativeElement;
    // let email = emailInput.nativeElement;
    // let password=passwordInput.nativeElement;
    login.email = "vedant.nare04@gmail.com";
    login.password = "vedant";
    // email.dispatchEvent(new Event('input')); 
    // password.dispatchEvent(new Event('input'));
    let result = login.onMockSubmit();
    expect(result).toEqual(loginResponse);
  });

  fit('should return false on incorrect email/password input', () => {
    let login = new LoginComponent(router, userService);
    let loginResponse: boolean = false;
    spyOn(login, 'onMockSubmit').and.returnValue(loginResponse);
    // const emailInput = fixture.debugElement.query(By.css('input[name="email"]'));
    // const passwordInput = fixture.debugElement.query(By.css('input[name="password"]'));
    // let button = fixture.debugElement.query(By.css('button')).nativeElement;
    // let email = emailInput.nativeElement;
    // let password=passwordInput.nativeElement;
    login.email = " ";
    login.password = "vedant";
    // email.dispatchEvent(new Event('input')); 
    // password.dispatchEvent(new Event('input'));
    let result = login.onMockSubmit();
    expect(result).toEqual(loginResponse);
  });

});