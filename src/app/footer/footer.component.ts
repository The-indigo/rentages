import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faSnapchat, faTwitter } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    faInstagram = faInstagram
  faSnapchat = faSnapchat
  faTwitter = faTwitter
  faFacebook=faFacebook
  constructor() { }

  ngOnInit(): void {
  }

}
