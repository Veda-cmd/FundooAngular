import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {InputTextModule} from 'primeng/inputtext';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
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
    MatTooltipModule,
    MatListModule,
    MatDividerModule,
    MatChipsModule,
    MatDialogModule,
    MatCheckboxModule,
    InputTextModule,
    ButtonModule
  ]
})
export class MaterialUIModule { }
