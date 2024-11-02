import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top', // Scrolls to the top on all navigation
        anchorScrolling: 'enabled'        // Scrolls to the element with matching fragment in the URL
      })
    )
  ]
}).catch(err => console.error(err));