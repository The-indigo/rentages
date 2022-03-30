import { Component, OnInit } from '@angular/core';
import { faClock, faLaptop, faLeaf, faLocationDot, faTruck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    faLocation = faLocationDot
  faClock = faClock
  faLaptop = faLaptop
  faLeaf = faLeaf
  faTruck = faTruck
  constructor() { }

  ngOnInit(): void {
  }

}
