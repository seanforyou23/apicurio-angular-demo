import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ApicurioCommonComponentsModule, ApicurioEditorModule} from 'apicurio-design-studio';

import { AppComponent } from './app.component';
import {BsDropdownModule, ModalModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ApicurioEditorModule,
    ApicurioCommonComponentsModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
