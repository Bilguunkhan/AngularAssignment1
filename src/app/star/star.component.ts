import { Component,  OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { StarServiceService } from './star-service.service';


@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  ngOnInit() {
  }

  activeStars;
  numbers;

   constructor() {
   }

   @Input() isSelected = false;
   @Input() counter = 0;

  onStarClick(){
    this.isSelected = !this.isSelected;
    this.counter++;
  }
  
}
