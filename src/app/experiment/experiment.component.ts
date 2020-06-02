import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish/Dish.model';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css']
})
export class ExperimentComponent implements OnInit {

  cart: Dish[];
  constructor() {
this.cart = [
  {
    id: 1,
    name: 'PalakPaneer',
    description:
      'Palak paneer is a vegetarian dish originating from the Indian subcontinent, consisting of paneer in a thick paste made from puréed spinach and seasoned with ginger, garlic, garam masala, and other spices. Palak paneer may be called green paneer in some restaurants in the United States and Canada.',
    image: 'assets/1.jpg',
   // image: 'assets/palakpaneer.jpg',
   isVeg: true,
   inStock: true,
   quantity: 2
  },
  {
    id: 2,
    name: 'Rajma',
    description: 'Rājmā or Rāzmā is a popular vegetarian dish, originating from the Indian subcontinent, consisting of red kidney beans in a thick gravy with many Indian whole spices, and is usually served with rice.',
    image: 'assets/2.jpg',
   // image: 'assets/rajma.jpg',
    isVeg: true,
    inStock: true,
    quantity: 5
  },
];

  }

  ngOnInit(): void {
  }

  onQuantity(){

  }
}
