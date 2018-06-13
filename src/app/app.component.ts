import { Component } from '@angular/core';
import { ApiEditorComponent, ApiDefinition } from 'apicurio-design-studio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';

  constructor() {
    // Something will be here soon
  }

  public apiDefinition(): ApiDefinition {
    let def: ApiDefinition = new ApiDefinition();
    def.createdBy = 'user1';
    def.createdOn = new Date();
    def.tags = [];
    def.description = '';
    def.id = 'api-1';
    def.spec = {
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
            'scheme': 'Basic'
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
    return def;
  }

  public onUserChange(event): void {
    console.log('Something happened! ' + JSON.stringify(event));
  }
}
