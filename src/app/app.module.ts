import { NgModule } from '@angular/core';
import { WallDisplayComponent } from './wall-display/wall-display.component';
import { WallMessageFormComponent } from './wall-message-form/wall-message-form.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WallMessageService }  from './wall-message.service';
//Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
	  AppComponent,
	  WallDisplayComponent, 
	  WallMessageFormComponent],
  exports: [
	  AppComponent
  ],
  imports: [
	   BrowserModule,
	    FormsModule,
	    HttpModule,
	    //InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  bootstrap: [ AppComponent ],
  providers: [ WallDisplayComponent, WallMessageService ]
})
export class AppModule { }
