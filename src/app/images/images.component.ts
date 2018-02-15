import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContentProviderService } from './content-provider.service';

@Component({
  selector: 'images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  title = "Pictures Component";
  pictures;

   constructor(private _contentprovider: ContentProviderService) {
      this.pictures = this._contentprovider.getPics();
   }

   ngOnInit() {
  }
}
