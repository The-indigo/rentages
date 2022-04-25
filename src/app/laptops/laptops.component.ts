import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { BasketService } from '../basket.service';
import { Computer } from '../computers';
import { ComputersService } from '../computers.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {

  laptops: Computer[] = []
  errorMessage?:string;
    isLoading: boolean = false;
   isLoggedIn = this.authService.isloggedIn()
  constructor(private computerService: ComputersService,
    private basketService:BasketService,
    private authService: AuthService) { }

 

  getLaptops(): void{
    this.isLoading = true;
    this.computerService.getComputers().subscribe({
      next: (data) => {
    this.laptops = data.filter((n) => n.isLaptop == true)
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
    this.getLaptops()
  }

}
