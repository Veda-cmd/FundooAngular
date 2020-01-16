import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUIModule } from './material-ui/material-ui.module';
import { FormsModule } from '@angular/forms'; 
import {MyInterceptor} from './interceptor';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResetComponent } from './components/reset/reset.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RemindersComponent } from './components/dashboard/reminders/reminders.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ResetComponent,
    ForgotComponent,
    PagenotfoundComponent,
    RemindersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUIModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
