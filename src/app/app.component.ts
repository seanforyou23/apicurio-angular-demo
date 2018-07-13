import { Component, ViewChild } from '@angular/core';
import { ApiEditorComponent, ApiDefinition } from 'apicurio-design-studio';
import { OtCommand } from 'oai-ts-commands';
import { WindowRef } from './window-ref';
import * as YAML from 'yamljs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  @ViewChild('_apiEditor') _apiEditor: ApiEditorComponent;
  title = 'app';
  apiDef: ApiDefinition;

  constructor(private winRef: WindowRef) {
    this.winRef.nativeWindow.dump = YAML.dump;
    this.apiDef = new ApiDefinition();
    this.apiDef.createdBy = 'user1';
    this.apiDef.createdOn = new Date();
    this.apiDef.tags = [];
    this.apiDef.description = '';
    this.apiDef.id = 'api-1';
    this.apiDef.spec = {
      'openapi': '3.0.0',
      'info': {
        'title': 'Simple OAI 3.0.0 API',
        'description': 'A simple API using OpenAPI 3.0.0.',
        'contact': {
          'name': 'Example Org',
          'url': 'http://www.example.org',
          'email': 'contact@example.org'
        },
        'license': {
          'name': 'Apache 2.0',
          'url': 'https://www.apache.org/licenses/LICENSE-2.0'
        },
        'version': '2.0.11'
      },
      'paths': {
      },
      'components': {
        'schemas': {
          'Address': {
            'properties': {
              'name': {},
              'street': {},
              'city': {},
              'state': {},
              'zip': {}
            }
          },
          'User': {
            'properties': {
              'address': {
                '$ref': '#/components/schemas/Address'
              }
            }
          }
        },
        'securitySchemes': {
          'Basic': {
            'type': 'http',
            'description': 'Basic auth.',
            'scheme': 'basic'
          }
        }
      },
      'tags': [
        {
          'name': 'foo',
          'description': 'The Foo tag.'
        },
        {
          'name': 'bar',
          'description': 'The bar tag.'
        },
        {
          'name': 'baz',
          'description': 'The baz tag.\n'
        }
      ]
    };
  }

  public apiDefinition(): ApiDefinition {
    return this.apiDef;
  }

  public onUserSelection(selection: string): void {
    console.log('User selection changed: ', selection);
  }

  public onUserChange(command: OtCommand): void {
    console.log('Something happened! ' + JSON.stringify(command));
  }
}
