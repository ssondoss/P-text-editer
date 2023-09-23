import { NgModule } from '@angular/core';
import { SpecialCharactersPickerComponent } from './special-characters-picker.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    SpecialCharactersPickerComponent
  ],
  imports: [
    CommonModule ,
    FormsModule
  ],
  exports: [
    SpecialCharactersPickerComponent
  ]
})
export class SpecialCharactersPickerModule { }
