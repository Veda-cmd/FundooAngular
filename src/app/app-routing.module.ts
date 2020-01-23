import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResetComponent } from './components/reset/reset.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { RemindersComponent } from './components/dashboard/reminders/reminders.component';
import { NotesComponent } from './components/dashboard/notes/notes.component';
import { LabelsComponent } from './components/dashboard/labels/labels.component';
import { ArchiveComponent } from './components/dashboard/archive/archive.component';
import { TrashComponent } from './components/dashboard/trash/trash.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgot',component:ForgotComponent},
  {path:'reset/:token',component:ResetComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuardService],children:[
    {path:'',redirectTo:'notes',pathMatch:'full'},
    {path:'notes',component:NotesComponent},
    {path:"reminders",component:RemindersComponent},
    {path:'label/:name',component:LabelsComponent},
    {path:'archive',component:ArchiveComponent},
    {path:'trash',component:TrashComponent},
    {path:'**',component:PagenotfoundComponent}
  ]},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
