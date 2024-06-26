import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { withFetch } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    { provide: HttpClient, deps: [], useFactory: withFetch }
  ]
})
.catch(err => console.error(err));
