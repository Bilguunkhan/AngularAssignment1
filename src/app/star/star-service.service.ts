import { Injectable } from '@angular/core';

@Injectable()
export class StarServiceService {

  constructor() { }
  // getActive(){
  //   return ["True", "False", "False"]
  // }
  // getNumbers(){
  //   return [ 2, 3, 4]
  // }

  getData(){
    return [
      {isSelected: "True", counter: 2},
      {isSelected: "False", counter: 3},
      {isSelected: "False", counter: 5}
    ]
  }
}
