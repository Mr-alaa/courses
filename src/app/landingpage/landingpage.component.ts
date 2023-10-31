import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})

export class LandingpageComponent
{
  hasDiscount: boolean = true;
  isHidden: boolean = false;

  onHideAd(hide: boolean) {
    this.isHidden = hide;
  }

}
