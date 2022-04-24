import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basketItems?: any[];
  total:number=0
  isLoading= false

  constructor(private basketService: BasketService) { }
  
    getBasketItems(): void{
          this.isLoading=true
    this.basketService.getBasket().subscribe(data => {
      this.basketItems = data
      this.total = this.basketItems?.reduce(function (a: any, b: any) {
        return a + b.device.price
      }, 0)
      console.log(this.basketItems)
            this.isLoading=false
    })
    }
      getAll(): void{
    this.basketService.getAllBaskets().subscribe(data => {
      console.log(data)
           
    })
      }
  deleteItem(id:any): void{
    this.basketService.deleteItemFromBasket(id).subscribe(data => {
      this.basketItems = this.basketItems?.filter((n: any) => n._id !== id)
          this.total = this.basketItems?.reduce(function (a: any, b: any) {
        return a + b.device.price
      }, 0)
    })
  }

  ngOnInit(): void {
    this.getBasketItems()
    
  }

}
