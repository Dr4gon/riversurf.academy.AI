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

@NgModule({
  declarations: [
    AppComponent,
    SwiperSlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
