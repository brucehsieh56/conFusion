import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes'

@Injectable()
export class DishService {

  constructor() { }

  // define a method to get `DISHES`
  getDishes(): Dish [] {
  	return DISHES;
  }

  // define a method to get a specific `dish`
  getDish(id: number): Dish {
  	return DISHES.filter((dish) => (dish.id === id))[0];
  }

  // define a method to get a specific `featured`
  getFeaturedDish(): Dish {
  	return DISHES.filter((dish) => (dish.featured))[0];
  }

}