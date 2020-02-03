import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUIModule } from './material-ui/material-ui.module';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms'; 
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
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AvatarModule } from 'ngx-avatar';
import { ArchiveComponent } from './components/dashboard/archive/archive.component';
import { TrashComponent } from './components/dashboard/trash/trash.component';
import { LabelsComponent } from './components/dashboard/labels/labels.component';
import { LabelDialogComponent } from './components/dashboard/label-dialog/label-dialog.component';
import { TrashiconsComponent } from './components/dashboard/trashicons/trashicons.component';
import { LabelmenuComponent } from './components/dashboard/labelmenu/labelmenu.component';
import { NotedialogComponent } from './components/dashboard/notedialog/notedialog.component';
import { MatIconModule } from '@angular/material/icon';

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
    IconsComponent,
    ArchiveComponent,
    TrashComponent,
    LabelsComponent,
    LabelDialogComponent,
    TrashiconsComponent,
    LabelmenuComponent,
    NotedialogComponent
  ],
  entryComponents: [LabelDialogComponent,
  NotedialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUIModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AvatarModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  exports:[
    MaterialUIModule
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
