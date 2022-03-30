import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faCancel, faClose } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false
  menuOpen?: boolean = false;
  faHamburger = faBars
  faClose=faClose

  constructor(private authService: AuthService, private router: Router) { }  
  
  showMenu(): void{
    this.menuOpen= !this.menuOpen
}

    logout(): void
  {
    this.authService.logout().subscribe(data => {
      this.router.navigate(['/login']);
      this.isLoggedIn=false
    });
  }
  ngOnInit(): void {
    this.isLoggedIn=this.authService.isloggedIn()
  }

}
