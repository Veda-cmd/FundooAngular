import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule,MatIconModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [],
  exports:[
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    InputTextModule,
    ButtonModule
  ]
})
export class MaterialUIModule { }
