import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatRadioModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule
  ],
  exports: [
    CommonModule,
    MatRadioModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule
  ]
})
export class MaterialModule { }
