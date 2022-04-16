import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { BasketService } from '../basket.service';
import { Computer } from '../computers';
import { ComputersService } from '../computers.service';

@Component({
  selector: 'app-desktops',
  templateUrl: './desktops.component.html',
  styleUrls: ['./desktops.component.css']
})
export class DesktopsComponent implements OnInit {

  desktops: Computer[] = []
  isLoading:boolean=false
  constructor(private computerService:ComputersService, private basketService:BasketService, private authService:AuthService) { }
  isLoggedIn = this.authService.isloggedIn()

  getDesktops(): void{
          this.isLoading=true
    this.computerService.getComputers().subscribe(data => {
      this.desktops = data.filter((n) => n.isDesktop == true)
      console.log(this.desktops)
            this.isLoading=false
    })
  }

  addToBasket(computer:Computer): void{
    this.basketService.addToBasket(computer, computer._id,this.authService.user.id).subscribe(data => {
      console.log(data)
    })
  }

  ngOnInit(): void {
    this.getDesktops()
    
  }

}
