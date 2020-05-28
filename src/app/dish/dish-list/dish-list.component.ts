import { Component, OnInit } from '@angular/core';
import { DishService } from '../dish.service';
import { Dish } from '../Dish.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  dishes: Dish[] = [];
  constructor(private dishService: DishService, private router: Router) { }

  ngOnInit(): void {
    this.dishes = this.dishService.getAllDish();
  }

  onSelectedDish(dish: Dish){
    console.log(dish)
    this.dishService.selectedDish.next(dish);
    this.router.navigate(['/dish/dishDetail']);
  }
}
