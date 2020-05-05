import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from '../shared/loading/loading.component';
import { AlertComponent } from '../shared/alert/alert.component';

@NgModule({
  declarations: [
    LoadingComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ 
    FormsModule, 
    ReactiveFormsModule,
    LoadingComponent,
    AlertComponent
  ]
})
export class SharedModule { }