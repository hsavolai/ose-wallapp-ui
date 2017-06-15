import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../in-memory-data.service';

import { WallDisplayComponent } from '../wall-display/wall-display.component';
import { WallMessageFormComponent } from '../wall-message-form/wall-message-form.component';
import { WallMessageService }  from '../wall-message.service';
import { AppComponent } from '../app.component';


@NgModule({
  declarations: [
    WallMessageFormComponent,
    //WallDisplayComponent
  ],
  exports: [
	WallMessageFormComponent,
	//WallDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [ WallMessageService,
	  WallDisplayComponent ],
  bootstrap: []
})
export class WallMessageFormModule { }
