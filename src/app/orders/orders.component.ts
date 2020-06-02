import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish/Dish.model';
import { OrderService } from './order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Dish[] = [];
  constructor(private orderService: OrderService) {
    this.orders = this.orderService.getOrders();
  }

  ngOnInit(): void {
  }

}
