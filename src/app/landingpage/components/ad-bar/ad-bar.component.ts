import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ad-bar',
  templateUrl: './ad-bar.component.html',
  styleUrls: ['./ad-bar.component.css']
})
export class AdBarComponent {

  @Output() hideAd = new EventEmitter<boolean>();

  hideSection(){
    // emit event on click
    this.hideAd.emit(true);
  }

}
