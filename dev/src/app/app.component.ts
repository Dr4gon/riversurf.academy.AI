import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: require('./app.component.html').default, // https://stackoverflow.com/questions/59070216/webpack-file-loader-outputs-object-module
  // styles: [ require('./app.component.sass').default ], -> Can't be used with global styles.sass because in the webpack configuration a raw-loader with esModule: false would disable the styles.sass transformation
})
export class AppComponent {
  title = 'dev';
}
