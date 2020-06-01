import { Component, OnInit } from '@angular/core';
import { DishService } from '../dish.service';
import { Dish } from '../Dish.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  dishes: Dish[] = [];
  dishClickable = false;

  constructor(private dishService: DishService, private router: Router) { }

  ngOnInit(): void {
    this.dishes = this.dishService.getAllDish();
  }

  onSelectedDish(dish: Dish, index: number){
    //console.log(dish);
    this.dishService.selectedDish.next(dish);
    this.dishService.selcetedDishIndex.next(index);
    this.dishService.isOrderplaceable.next(true);
    this.router.navigate(['/dish/dishDetail']);
  }
}
