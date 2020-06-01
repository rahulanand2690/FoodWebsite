import { Component, OnInit, Input,OnDestroy } from '@angular/core';
import { Dish } from '../Dish.model';
import { DishService } from '../dish.service';
import { Router } from '@angular/router';

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
  constructor(private dishService: DishService, private router:Router) {
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
    console.log("in constructor...."+JSON.stringify(this.dish))
    console.log("Dish Index in constructor********"+this.dishIndex);
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
    this.dish.order = this.quantity.toString();

    this.quantity = 0;
    this.dishService.isOrderplaceable.next(false);
    alert('order places sucessfully!!');
    console.log("order clicked"+ JSON.stringify(this.dish));

  }

  onGoToCart(){
    this.router.navigate(['/order']);
  }

  ngOnDestroy() {
    //this.dish.isEdit = false;
    console.log("ondestroy called!!!!!!!!!")
  }
}
