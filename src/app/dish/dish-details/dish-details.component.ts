import { Component, OnInit, Input,OnDestroy } from '@angular/core';
import { Dish } from '../Dish.model';
import { DishService } from '../dish.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/orders/cart/cart.service';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit, OnDestroy {
  quantity = 0;
  dishIndex: number;
  dishClickable: boolean;
 dish: Dish = {
      id: 1,
      name: 'PalakPaneer',
      description:
        'Palak paneer is a vegetarian dish originating from the Indian subcontinent, consisting of paneer in a thick paste made from puréed spinach and seasoned with ginger, garlic, garam masala, and other spices. Palak paneer may be called green paneer in some restaurants in the United States and Canada.',
      image: 'assets/1.jpg',
     // image: 'assets/palakpaneer.jpg',
     isVeg: true,
     inStock: true,
     //isEdit: false
    };
//dish: Dish;
  constructor(private dishService: DishService, private router: Router, private cartService: CartService) {
    this.dishService.selectedDish.subscribe(
      data => {
        this.dish = data;
        this.dish.isEdit = true;
      },
    );

    this.dishService.isOrderplaceable.subscribe(
      data => this.dishClickable = data
    );


    //fetch dish index
    this.dishService.selcetedDishIndex.subscribe(
      data => this.dishIndex = data
    );
    //console.log("in constructor...."+JSON.stringify(this.dish))
    //console.log("Dish Index in constructor********"+this.dishIndex);
  }

  ngOnInit(): void {

  }
  onQuantity(qty: number){
    let temp = this.quantity + qty;
    temp = temp >= 10 ? 10 : temp;
    this.quantity = temp <= 0 ? 0 : temp;
    //this.dish.isEdit = false;
    //console.log("In onQuantiy"+JSON.stringify(this.dish));
  }
  onOrder(){
    this.dish.quantity = this.quantity;

    this.dishService.isOrderplaceable.next(false);
    alert('Dish added to cart!');
   // console.log("order clicked"+ JSON.stringify(this.dish));
    this.cartService.addDishToCart(this.dish);


    this.quantity = 0;

  }

  onGoToCart(){

    this.router.navigate(['/cart']);
  }

  ngOnDestroy() {
   /*  //this.dish.isEdit = false;
    console.log("ondestroy called!!!!!!!!!") */
  }
}
