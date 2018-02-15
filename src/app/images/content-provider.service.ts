import { Injectable } from '@angular/core';

@Injectable()
export class ContentProviderService {

  constructor() { }
  getPics(){
    return ["https://zoodegranby.com/content/images/_300xAUTO_fit_center-center/Panda_280x280.jpg", "https://www.randomlists.com/img/animals/musk_deer.jpg", "https://media.npr.org/assets/img/2017/02/03/captain-fantastic_sq-e699d6c81cb7bb4bc28dab08324625c68d7429e2-s300-c85.jpg"];
  }
}
