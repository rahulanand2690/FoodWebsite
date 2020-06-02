import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish/Dish.model';
import { OrderService } from './order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: Dish[] = [];
  constructor(private orderService: OrderService, private router: Router) {
    this.orders = this.orderService.getOrders();
  }

  ngOnInit(): void {}

  onGoHome() {
    this.router.navigate(['/home']);
    this.orderService.resetOrders();
  }
}
