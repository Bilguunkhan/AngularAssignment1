import { Component } from '@angular/core';
import { StarServiceService } from './star/star-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    data = [];

   constructor(private _starservice: StarServiceService) {
      this.data = this._starservice.getData();
   }

  // statePreview = this.data.isSelected;

  onIconChange($event){
    console.log($event.newValue);
    // this.statePreview = $event.newValue;
  }
}
