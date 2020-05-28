import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../Dish.model';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {
 dish: Dish = {
  id: 3,
  name: 'matar Aalo dish',
  description: 'Aloo mutter is a Punjabi dish from the Indian subcontinent which is made from potatoes and peas in a spiced creamy tomato based sauce. It is a vegetarian dish. The sauce is generally cooked with garlic, ginger, onion, tomatoes, cilantro, cumin seeds and other spices.',
  image: 'assets/AlooMatar.jpg',
};
  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.dishService.selectedDish.subscribe(
      data =>  this.dish = data
    );
  }

}
