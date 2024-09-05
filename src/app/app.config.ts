import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAuth0 } from '@auth0/auth0-angular';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(),
    provideAuth0({
      domain: 'dev-nekoedg.us.auth0.com',
      clientId: 'UwhRl36w7BAauMmmN8zmTI86Kt0efb6D',
      authorizationParams: {
        redirect_uri: window.location.origin
      },
      cacheLocation: 'localstorage'
    }),
  ]
};
