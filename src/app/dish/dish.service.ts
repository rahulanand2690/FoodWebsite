import { Injectable } from '@angular/core';
import { Dish } from './Dish.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  dishes: Dish[] = [
    {
      id: 1,
      name: 'PalakPaneer',
      description:
        'Palak paneer is a vegetarian dish originating from the Indian subcontinent, consisting of paneer in a thick paste made from puréed spinach and seasoned with ginger, garlic, garam masala, and other spices. Palak paneer may be called green paneer in some restaurants in the United States and Canada.',
      image: 'assets/palakpaneer.jpg',
    },
    {
      id: 2,
      name: 'Rajma',
      description: 'Rājmā or Rāzmā is a popular vegetarian dish, originating from the Indian subcontinent, consisting of red kidney beans in a thick gravy with many Indian whole spices, and is usually served with rice.',
      image: 'assets/rajma.jpg',
    },
    {
      id: 3,
      name: 'matar Aalo dish',
      description: 'Aloo mutter is a Punjabi dish from the Indian subcontinent which is made from potatoes and peas in a spiced creamy tomato based sauce. It is a vegetarian dish. The sauce is generally cooked with garlic, ginger, onion, tomatoes, cilantro, cumin seeds and other spices.',
      image: 'assets/AlooMatar.jpg',
    },
  ];

  selectedDish = new Subject<Dish>();
  constructor() {}

  getAllDish() {
    return this.dishes;
  }
  getDish(id: number) {
    return this.dishes.filter((x) => x.id == id);
  }
  saveDish(dish: Dish) {
    this.dishes.push(dish);
  }
  deleteDish(dish: Dish) {
    // call delete rest api;
  }
}
