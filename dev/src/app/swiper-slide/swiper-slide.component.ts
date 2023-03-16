import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'swiper-slide',
  template: require('./swiper-slide.component.html').default,
})
export class SwiperSlideComponent implements OnInit, AfterViewInit {

  @ViewChild('.newSwiper') newSwiper: any;

  constructor() {
  }

  ngOnInit(): void {
    console.log('Swiper-Slider Component initializing.');
    this.newSwiper = new Swiper('.newSwiper', {
      grabCursor: true,
      effect: 'creative',
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [ 0, 0, -400 ],
        },
        next: {
          translate: [ '100%', 0, 0 ],
        },
      },
    });
  }

  ngAfterViewInit() {
    console.log('Swiper-Slider Component init complete.');
  }
}
