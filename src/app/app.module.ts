import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApicurioEditorModule } from 'apicurio-design-studio';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ApicurioEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
