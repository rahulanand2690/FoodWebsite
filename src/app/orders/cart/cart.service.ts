import { Injectable } from '@angular/core';
import { Dish } from 'src/app/dish/Dish.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Dish[] =[];
  cartData = new Subject<Dish[]>();
  constructor() {
    /* this.cart = [
      {
        id: 1,
        name: 'PalakPaneer',
        description:
          'Palak paneer is a vegetarian dish originating from the Indian subcontinent, consisting of paneer in a thick paste made from puréed spinach and seasoned with ginger, garlic, garam masala, and other spices. Palak paneer may be called green paneer in some restaurants in the United States and Canada.',
        image: 'assets/1.jpg',
        // image: 'assets/palakpaneer.jpg',
        isVeg: true,
        inStock: true,
        quantity: 2,
      }
    ]; */
  }

  getCartData(){
    //this.cartData.next(this.cart);
    return this.cart;
  }
  addDishToCart(dish: Dish){
  //  console.log("in cartservice add Dish"+ JSON.stringify(dish));
    this.cart.push(dish);
  }

}
