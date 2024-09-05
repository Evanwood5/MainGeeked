import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// for swiper js to work
import { register as registerSwiperElements } from 'swiper/element/bundle';

// also for swiper js to work
registerSwiperElements();

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
