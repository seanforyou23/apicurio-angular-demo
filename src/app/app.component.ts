import { Component, ViewChild } from '@angular/core';
import { ApiEditorComponent, EditableApiDefinition } from 'apicurio-design-studio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  @ViewChild('apiEditor')
  apiEditor: ApiEditorComponent;
  title = 'app';

  constructor() {
    this.apiEditor.api = new EditableApiDefinition();
  };
}
