import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { BasketService } from '../basket.service';
import { Computer } from '../computers';
import { ComputersService } from '../computers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers: Computer[] = []
  isLoading: boolean = false;
  isLoggedIn = this.authService.isloggedIn()
  errorMessage?:string
  constructor(private computerService: ComputersService,
    private basketService:BasketService,
    private authService: AuthService) { }

getServers(): void{
    this.isLoading = true;
    this.computerService.getComputers().subscribe({
      next: (data) => {
    this.servers = data.filter((n) => n.isServer == true)
      },
      error: (error) => {
        this.errorMessage=error
      }
    })
    setTimeout(() => {
      this.isLoading = false;
    },3000)
          }
  
     addToBasket(computer:Computer): void{
    this.basketService.addToBasket(computer, computer._id,this.authService.user.id).subscribe(data => {
      console.log(data)
    })
  }

  ngOnInit(): void {
    this.getServers()
    
  }
}
