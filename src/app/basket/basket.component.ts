import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basketItems: any;
  isLoading= false

  constructor(private basketService: BasketService) { }
    getBasketItems(): void{
          this.isLoading=true
    this.basketService.getBasket().subscribe(data => {
      this.basketItems = data
      console.log(this.basketItems)
            this.isLoading=false
    })
    }
      getAll(): void{
    this.basketService.getAllBaskets().subscribe(data => {
      console.log(data)
           
    })
  }

  ngOnInit(): void {
     this.getBasketItems()
  }

}