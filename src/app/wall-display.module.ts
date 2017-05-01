import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WallDisplayComponent } from './wall-display.component';

@NgModule({
  declarations: [
    WallDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [WallDisplayComponent]
})
export class WallDisplayModule { }
