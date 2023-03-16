import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loading',
  template: require('./loading.component.html').default,
})
export class LoadingComponent implements OnInit, AfterViewInit {
  // @ts-ignore because dependency injection loads component
  showLoading: boolean;
  private observerList: Observable<any>[] = [];

  constructor() {
  }

  ngOnInit() {
    console.log('Loading Component initializing.');
    this.showLoading = true;
  }

  ngAfterViewInit() {
    console.log('Loading Component init complete.');
  }

  // the observable way to handle things
  public add(observer: Observable<any>): Observable<any> {
    this.observerList.push(observer);
    observer.subscribe((obj) => {
      this.observerList.splice(this.observerList.indexOf(observer), 1);
      this.update();
    });

    return observer;
  }

  public hasFinished(): boolean {
    return this.observerList.length <= 0;
  }

  private update() {
    this.showLoading = this.observerList.length > 0;
  }

  // if no observable are necessary - use this
  public show(): void {
    console.log('Show spinner loading.')
    this.showLoading = true;
  }

  public hide(): void {
    console.log('Hide spinner loading.')
    this.showLoading = false;
  }
}
