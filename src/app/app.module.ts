import { NgModule } from '@angular/core';
import { WallDisplayModule } from './wall-display/wall-display.module';
import { WallMessageFormModule } from './wall-message-form/wall-message-form.module';
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
	  ],
  exports: [
	  AppComponent
  ],
  imports: [
	  WallDisplayModule, 
	  WallMessageFormModule,
	  BrowserModule,
	    FormsModule,
	    HttpModule,
	    //InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  bootstrap: [ AppComponent ],
  providers: [ WallMessageService ]
})
export class AppModule { }
