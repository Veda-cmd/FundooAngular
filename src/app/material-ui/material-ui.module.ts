import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [],
  exports:[
    MatCardModule,
    MatMenuModule
  ]
})
export class MaterialUIModule { }
