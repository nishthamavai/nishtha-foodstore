import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }
  
  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return  this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 10 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fried Food', count: 1 },
      { name: 'Soup', count: 1 },
      { name: 'Dessert', count:2},
      { name: 'Drinks', count:1},
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pepperoni Pizza',
        cookTime: '10-20 mins',
        price: 100,
        favorite: false,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 200,
        cookTime: '20-30 mins',
        favorite: true,
        origins: ['Persia', 'Middle east'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 380,
        cookTime: '10-15 mins',
        favorite: false,
        origins: ['Germany', 'USA'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'French Fries',
        price: 200,
        cookTime: '15-20 mins',
        favorite: true,
        origins: ['Belgium', 'France'],
        stars: 3.3,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['FastFood', 'Fried Food'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 101,
        cookTime: '40-50 mins',
        favorite: false,
        origins: ['Asia'],
        stars: 3.0,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['Soup'],
      },
      {
        id: 6,
        name: 'Vegetarian Pizza',
        price: 250,
        cookTime: '40-50 mins',
        favorite: false,
        origins: ['Italy'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'Vegetarian Momos',
        price: 100,
        cookTime: '40-50 mins',
        favorite: true,
        origins: ['Nepal','Tibet'],
        stars: 5.0,
        imageUrl: '/assets/images/foods/food-7.jpg',
        tags: ['Lunch'],
      },
      {
        id: 8,
        name: 'Brownies',
        price: 150,
        cookTime: '25-35 mins',
        favorite: true,
        origins: ['USA'],
        stars: 5.0,
        imageUrl: '/assets/images/foods/food-8.jpg',
        tags: ['Dessert'],
      },
      {
        id: 9,
        name: 'Chocolate Milkshake',
        price: 300,
        cookTime: '5-10 mins',
        favorite: true,
        origins: ['USA'],
        stars: 5.0,
        imageUrl: '/assets/images/foods/food-9.jpg',
        tags: ['Drinks'],
      },
      {
        id: 10,
        name: 'Pumpkin Pie',
        price: 50,
        cookTime: '1hr',
        favorite: false,
        origins: ['USA', 'UK'],
        stars: 2.5,
        imageUrl: '/assets/images/foods/food-10.jpg',
        tags: ['Dessert'],
      },
    ];
  }
}
