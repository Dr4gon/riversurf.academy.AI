import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { LoadingComponent } from './loading/loading.component';

@Component({
  selector: 'app-root',
  template: require('./app.component.html').default, // https://stackoverflow.com/questions/59070216/webpack-file-loader-outputs-object-module
  // styles: [ require('./app.component.sass').default ], -> Can't be used with global styles.sass because in the webpack configuration a raw-loader with esModule: false would disable the styles.sass transformation
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'dev';

  // @ts-ignore because dependency injection loads component
  @ViewChild(LoadingComponent) loading: LoadingComponent;

  ngOnInit() {
    console.log('App Component initializing.');
  }

  ngAfterViewInit() {
    console.log('App Component init complete.');
    setTimeout(() => { // needed to delay the view change after detect changes is complete
      this.loading.hide();
    }, 3000); // artificial timeout to simulate data loading until backend is connected
  }
}
