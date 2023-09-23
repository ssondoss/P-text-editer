import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEmojiPickerModule } from 'ngx-emoji-picker';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorSketchModule } from 'ngx-color/sketch'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopoverModule } from 'ngx-smart-popover';
import { NgxColorsModule } from 'ngx-colors';
import { CommentsComponent } from './comments/comments.component';
import {  SpecialCharactersPickerModule } from 'special-characters-picker';
import { HttpClientModule } from '@angular/common/http';
import {LightboxModule} from 'lightbox-sondos';
@NgModule({ 
  declarations: [AppComponent, CommentsComponent
  ], 
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    NgxColorsModule,
    ReactiveFormsModule,
    ColorSketchModule, // added to imports
    NgxEmojiPickerModule.forRoot(),
SpecialCharactersPickerModule,
    PopoverModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LightboxModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
