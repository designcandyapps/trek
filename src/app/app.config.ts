import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideMapboxGL } from "ngx-mapbox-gl"

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideMapboxGL({
      accessToken: 'pk.eyJ1IjoicmtkMzUxMDkiLCJhIjoiY21odXE2eDVuMDF6ZjJsc2cxNjBvOHh5ayJ9.7AQCGbljrTs5IPOrrGhIbw'
    })
  ]
};
