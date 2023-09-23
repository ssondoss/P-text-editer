# Special Characters Picker

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

simple special charcters picker which contiains +400 character with search input and categories





## Installation

this package depends on "bootstrap" and "@popperjs/core" I already inserted them as dependencies so they will be installed by default(`but you need to add bootstrap style and script`), or you can install them via `npm`:


``` 
npm i bootstrap@5 && npm i @popperjs/core 

```

`Add Bootstrap CSS:`

Open angular.json and locate the styles array inside the architect -> build -> options section of your application. Add the Bootstrap CSS path to the array:

```
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
```

`Then, in the same angular.json file, add the necessary scripts to the scripts array:`

```
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```

The special-characters-picker package can be installed via `npm`:

``` 
npm i special-characters-picker 

```


##  Usage/Example

```

import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
  <button class="btn btn-primary" (click)="show =true">Open Picker</button>

  <special-characters-picker 
  [showModel]="show" //showModel input shows the picker when it's true
  (closeModel)="show=false" //closeModel triggered when the picker is closed so the value of showModel must change to false
  (selectSpecialChar)="selectChar($event)"> // selectSpecialChar triggered when character is selected
  </special-characters-picker> 
   `,
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
    show:boolean=false;
      selectChar(char:string){
      console.log(char); // selected char
  }

}



```
```
//App Module

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEmojiPickerModule } from 'ngx-emoji-picker';

import { AppComponent } from './app.component';

import {  SpecialCharactersPickerModule } from 'special-characters-picker';
@NgModule({ 
  declarations: [AppComponent], 
  imports: [
 // other modules 
   SpecialCharactersPickerModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


```
## Package Image
![My Package Logo](https://i.imgur.com/HEesJMX.png)


## Author

[Sondos Marashdeh](https://www.linkedin.com/in/sondos-marashdeh-b64806206/)