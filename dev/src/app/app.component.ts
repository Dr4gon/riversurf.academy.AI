import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: require('./app.component.html').default, // https://stackoverflow.com/questions/59070216/webpack-file-loader-outputs-object-module
  styles: [ require('./app.component.sass') ],
})
export class AppComponent {
  title = 'dev';
}
