import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardComponent } from './dashboard.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DrawerComponent } from './drawer/drawer.component';
import { MaterialUIModule } from 'src/app/material-ui/material-ui.module';
import { AvatarModule } from 'ngx-avatar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoteService } from 'src/app/services/note.service';
import { of } from 'rxjs';
import { MyInterceptor } from 'src/app/interceptor';

describe('DashboardComponent', () => {
    let fixture : ComponentFixture<DashboardComponent>;
    let noteService:NoteService;
    beforeAll(()=>{
      sessionStorage.setItem('token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYmQ2OGFjZjMwODE2MGYyNDM0MTNiYSIsImVtYWlsIjoidmVkYW50Lm5hcmUwNEBnbWFpbC5jb20iLCJpYXQiOjE1ODA4MDExMzB9.c1gsv6xk9Fov8GwL2yD4IyMPyroN436vojr15vc6TAc");
    })

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          MaterialUIModule,
          AvatarModule,
          HttpClientModule,
          BrowserAnimationsModule
        ],
        declarations: [
          DashboardComponent,
          ToolbarComponent,
          DrawerComponent
        ],
        providers:[NoteService,{
          provide: HTTP_INTERCEPTORS,
          useClass: MyInterceptor,
          multi: true
        },]
      }).compileComponents().then(()=>{
        fixture = TestBed.createComponent(DashboardComponent);
        noteService=TestBed.get(NoteService);
      });
    }));
  
    fit('should create dashboard', () => {
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });

    fit('should render toolbar', () => {
      const app = fixture.debugElement.nativeElement;
      expect(app.querySelector('app-toolbar')).toBeDefined();
    });

    fit('should get all labels', () => {
      
      const labelResponse = [
        {
          _id: '1',
          label_name: 'Jane',
        },
        {
          _id: '2',
          label_name: 'Bob'
        }
      ];
      let response;
      spyOn(noteService, 'getLabels').and.returnValue(of(labelResponse));
      noteService.getLabels().subscribe(res=>{
        response = res
      })
      expect(response).toEqual(labelResponse);
      expect(response.length).toEqual(2);
    });
  
  });