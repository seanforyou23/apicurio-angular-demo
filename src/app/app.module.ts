import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { ApicurioCommonComponentsModule, ApicurioEditorModule } from 'apicurio-design-studio';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { BsDropdownModule, ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { WindowRef } from './window-ref';


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
  providers: [WindowRef],
  entryComponents: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const appElement = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('apicurio-wc', appElement);
  }

}
