import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import Swiper bundle with all modules installed
import { register } from 'swiper/element/bundle';

// import styles bundle
import 'swiper/css/bundle';
import { SwiperSlideComponent } from './swiper-slide/swiper-slide.component';

// init Swiper:
register();

// loading components for progress spinner
import { LoadingComponent } from './loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    SwiperSlideComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
