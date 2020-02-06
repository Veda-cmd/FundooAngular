import { TestBed, async, fakeAsync, tick, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialUIModule } from '../../material-ui/material-ui.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

fdescribe('LoginComponent', () => {
    let fixture:ComponentFixture<LoginComponent>
    let userService:UserService;
    let router:Router
    let login = new LoginComponent(router,userService);
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          MaterialUIModule,
          FormsModule,
          HttpClientModule,
          BrowserAnimationsModule
        ],
        declarations: [
          LoginComponent
        ],
        providers:[UserService]
      }).compileComponents();
      userService = TestBed.get(UserService);
      fixture = TestBed.createComponent(LoginComponent);
      fixture.detectChanges();
    }));
  
    it('should create the app', () => {
      const fixture = TestBed.createComponent(LoginComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });

    it('should have a user service', () => {
      expect(userService).toBeTruthy();
    });

    fit('should return error', fakeAsync(() => {
      
      fixture.whenStable().then(()=>{
        const emailInput = fixture.debugElement.query(By.css('input[name="email"]'));
        const passwordInput = fixture.debugElement.query(By.css('input[name="password"]'));
        let email = emailInput.nativeElement;
        let password=passwordInput.nativeElement;
        email.value="vedant";
        password.value="vedant";
        email.dispatchEvent(new Event('input',email));
        password.dispatchEvent(new Event('input',password));
        fixture.detectChanges();
        tick();
        let a = login.onSubmit();
        console.log(passwordInput);
      })
    }));  
  });