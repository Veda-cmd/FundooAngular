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
import { DrawerComponent } from './components/dashboard/drawer/drawer.component';
import { ToolbarComponent } from './components/dashboard/toolbar/toolbar.component';
import { NotesComponent } from './components/dashboard/notes/notes.component';
import { CreatenoteComponent } from './components/dashboard/createnote/createnote.component';
import { DisplaynotesComponent } from './components/dashboard/displaynotes/displaynotes.component';
import { IconsComponent } from './components/dashboard/icons/icons.component';
import { AvatarModule } from 'ngx-avatar';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ResetComponent,
    ForgotComponent,
    PagenotfoundComponent,
    RemindersComponent,
    DrawerComponent,
    ToolbarComponent,
    NotesComponent,
    CreatenoteComponent,
    DisplaynotesComponent,
    IconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUIModule,
    FormsModule,
    HttpClientModule,
    AvatarModule
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
