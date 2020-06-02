import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../orders/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private cartService: CartService) { }
  isCartEmpty: boolean;
  ngOnInit(): void {
    /* //this.isCartEmpty = !!this.cartService.getCartData();


    this.cartService.cartData.subscribe(
      data => console.log("in header"+ data.length)
      //this.isCartEmpty = data
    );
    console.log("isCart empty"+ this.isCartEmpty); */
  }
  onLogout(){
    this.router.navigate(['/home']);
  }
  onCart(){
    this.router.navigate(['/cart']);
  }

}
