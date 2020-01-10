import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  exports:[
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class MaterialUIModule { }
