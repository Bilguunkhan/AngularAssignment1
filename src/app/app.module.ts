import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { ContentProviderService } from './images/content-provider.service';
import { StarComponent } from './star/star.component';
import { StarServiceService } from './star/star-service.service';





@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    StarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ContentProviderService, StarServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
