import { Component } from '@angular/core';
import { faFacebook, faInstagram, faSnapchat, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faClock, faLaptop, faLeaf, faLocationDot, faTruck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faLocation = faLocationDot
  faClock = faClock
  faLaptop = faLaptop
  faLeaf = faLeaf
  faTruck = faTruck
  faInstagram = faInstagram
  faSnapchat = faSnapchat
  faTwitter = faTwitter
  faFacebook=faFacebook
}
