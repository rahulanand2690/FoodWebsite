import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/dish/Dish.model';
import { CartService } from './cart.service';
import { Router } from '@angular/router';
import { isNgTemplate } from '@angular/compiler';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Dish[];
  constructor( private cartService: CartService, private router: Router, private orderService: OrderService) {  }

  ngOnInit(): void {
    //this.cart = this.cartService.getCartData();
    this.cart = [...new Set(this.cartService.getCartData())];
  }

  onPlaceOrder(){
      this.orderService.setOrders(this.cart);
      this.router.navigate(['/order']);
      this.cartService.resetCart();
  }
  goToDish(){
    this.router.navigate(['/dish']);
  }
  onOuantity(qty: number, dish: Dish){
    let temp = 0;
    temp = qty + dish.quantity;
    temp = temp >= 10 ? 10 : temp;
    temp = temp <= 0 ? 0 : temp;

    this.updateQuantity(temp, dish);
  }

  updateQuantity(qty: number, dish: Dish){
    const tempCart = [...this.cart];
    const index = this.cart.findIndex(d => d.id === dish.id);
    // logic to update order quantity
    tempCart[index].quantity = qty;
    this.cart = tempCart;
  }
  consolidateCart(){
   let tempCart = this.cart;
   let dublicateDish = [];
   dublicateDish = getDuplicate(tempCart)
    tempCart = [...new Set(tempCart)];
    console.log(" unique"+ JSON.stringify(tempCart));
    console.log(" duplicate"+ JSON.stringify(dublicateDish));
   }

}
function getDuplicate(data){
  return data.filter((value, index) => data.indexOf(value !== index));

}
