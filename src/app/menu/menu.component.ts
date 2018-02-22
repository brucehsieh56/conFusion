import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

// import service
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

	// initiate properties
  dishes : Dish[];
  selectedDish : Dish;

  // build constructor
  constructor(private dishService: DishService) { }

  ngOnInit() {
  	this.dishes = this.dishService.getDishes();
  }

  onSelect(dish: Dish) {
  	this.selectedDish = dish;
  }

}