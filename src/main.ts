import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { HttpClientModule, provideHttpClient,withFetch } from '@angular/common/http';

bootstrapApplication(AppComponent,{
  providers:[
    provideRouter(routes),
    provideHttpClient(withFetch()),
    HttpClientModule
  ]
}).catch(err=>console.error(err));
