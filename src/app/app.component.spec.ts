import { TestBed, async } from '@angular/core/testing';
import { MaterialUIModule } from './material-ui/material-ui.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResetComponent } from './components/reset/reset.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ToolbarComponent } from './components/dashboard/toolbar/toolbar.component';
import { RemindersComponent } from './components/dashboard/reminders/reminders.component';
import { NotesComponent } from './components/dashboard/notes/notes.component';
import { DrawerComponent } from './components/dashboard/drawer/drawer.component';
import { IconsComponent } from './components/dashboard/icons/icons.component';
import { CreatenoteComponent } from './components/dashboard/createnote/createnote.component';
import { DisplaynotesComponent } from './components/dashboard/displaynotes/displaynotes.component';
import { ArchiveComponent } from './components/dashboard/archive/archive.component';
import { TrashComponent } from './components/dashboard/trash/trash.component';
import { LabelsComponent } from './components/dashboard/labels/labels.component';
import { LabelDialogComponent } from './components/dashboard/label-dialog/label-dialog.component';
import { TrashiconsComponent } from './components/dashboard/trashicons/trashicons.component';
import { NotedialogComponent } from './components/dashboard/notedialog/notedialog.component';
import { LabelmenuComponent } from './components/dashboard/labelmenu/labelmenu.component';
import { AvatarModule } from 'ngx-avatar';
import { MyInterceptor } from './interceptor';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { APP_BASE_HREF } from '@angular/common';

fdescribe('AppComponent', () => {  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        MaterialUIModule,
        FormsModule,
        HttpClientModule,
        AvatarModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule
      ],
      declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        ForgotComponent,
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
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: MyInterceptor,
          multi: true
        },
        { provide: APP_BASE_HREF, useValue: '/' }
      ],
    }).compileComponents();
  }));

  fit('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
