import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'; 
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

const MATERIAL_COMPONENT = [
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  FlexLayoutModule
];

@NgModule({
  imports: [ CommonModule, ...MATERIAL_COMPONENT ],
  exports: [ ...MATERIAL_COMPONENT ],
})
export class MaterialUiModule { }
