import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialUIModule } from '../../material-ui/material-ui.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

fdescribe('LoginComponent', () => {
    let userService:UserService;
    let router:Router
    let login = new LoginComponent(router,userService);
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          MaterialUIModule,
          FormsModule,
          HttpClientModule
        ],
        declarations: [
          LoginComponent
        ],
        providers:[UserService]
      }).compileComponents();
      userService = TestBed.get(UserService);
    }));
  
    fit('should create the app', () => {
      const fixture = TestBed.createComponent(LoginComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });

    fit('should have a user service', () => {
        expect(userService).toBeTruthy();
    });

    it('should return error', () => {
        const fixture = TestBed.createComponent(LoginComponent);
        const app = fixture.debugElement.componentInstance;
    });  
  });