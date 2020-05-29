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
      image: 'assets/1.jpg',
     // image: 'assets/palakpaneer.jpg',
     isVeg: true,
    },
    {
      id: 2,
      name: 'Rajma',
      description: 'Rājmā or Rāzmā is a popular vegetarian dish, originating from the Indian subcontinent, consisting of red kidney beans in a thick gravy with many Indian whole spices, and is usually served with rice.',
      image: 'assets/2.jpg',
     // image: 'assets/rajma.jpg',
      isVeg: true,
    },
    {
      id: 3,
      name: 'matar Aalo dish',
      description: 'Aloo mutter is a Punjabi dish from the Indian subcontinent which is made from potatoes and peas in a spiced creamy tomato based sauce. It is a vegetarian dish. The sauce is generally cooked with garlic, ginger, onion, tomatoes, cilantro, cumin seeds and other spices.',
      image: 'assets/3.jpg',
      //image: 'assets/AlooMatar.jpg',
      isVeg: true,
    },
    {
      id: 4,
      name: 'French Omlet',
      description: 'In cuisine, an omelette or omelet is a dish made from beaten eggs, fried with butter or oil in a frying pan. It is quite common for the omelette to be folded around fillings such as cheese, chives, vegetables, mushrooms, meat, or some combination of the above',
      image: 'assets/4.jpg',
      isVeg: false,
      //image: 'assets/AlooMatar.jpg',
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
