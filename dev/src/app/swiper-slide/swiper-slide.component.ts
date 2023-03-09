import { Component, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'swiper-slide',
  template: require('./swiper-slide.component.html').default,
})
export class SwiperSlideComponent {

  @ViewChild('.newSwiper') newSwiper: any;

  constructor() {
  }
  ngOnInit(): void {

    this.newSwiper = new Swiper(".newSwiper", {
      grabCursor: true,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [ 0, 0, -400 ],
        },
        next: {
          translate: [ "100%", 0, 0 ],
        },
      },
    });
  }

  ngAfterViewInit(): void {
  }
}
