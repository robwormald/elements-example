import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {LogWithoutElementsService} from './without-elements/log.service';
import {PopupComponent} from './without-elements/popup.component';

import {LogWithElementsService} from './with-elements/log.service';
import {PopupElementComponent} from './with-elements/popup.component';


@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    PopupElementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [LogWithoutElementsService, LogWithElementsService],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent, PopupElementComponent],
})
export class AppModule { }
