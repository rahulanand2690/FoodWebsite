import { Injectable } from '@angular/core';
import { Dish } from '../dish/Dish.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: Dish[] = [];
  ordersData = new Subject<Dish[]>();
  constructor() {

   }
   getOrders(){
     return this.orders;
   }

   setOrders(orders){
     this.orders = orders;
   }
   resetOrders(){
     this.orders = [];
   }
}
