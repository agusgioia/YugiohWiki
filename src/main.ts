import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { HttpClientModule, provideHttpClient,withFetch } from '@angular/common/http';
import { CommonModule } from '@angular/common';

bootstrapApplication(AppComponent,{
  providers:[
    provideRouter(routes),
    provideHttpClient(withFetch()),
    HttpClientModule,
    CommonModule
  ]
}).catch(err=>console.error(err));
