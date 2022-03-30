import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Computer } from '../computers';
import { ComputersService } from '../computers.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {

  laptops: Computer[] = []
    isLoading: boolean = false;
   isLoggedIn = this.authService.isloggedIn()
  constructor(private computerService:ComputersService, private authService:AuthService) { }

  
  getLaptops(): void{
      this.isLoading=true
    this.computerService.getComputers().subscribe(data => {
      console.log(data)
      this.laptops = data.filter((n) => n.isLaptop == true)
            this.isLoading=false
    })
  }

  ngOnInit(): void {
    this.getLaptops()
  }

}