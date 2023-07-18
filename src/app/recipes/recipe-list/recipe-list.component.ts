import { Component, OnInit } from '@angular/core';
import Recipe from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe 1',
      'This is test recipe description',
      'https://upload.wikimedia.org/wikipedia/commons/c/c1/Indian-Food-wikicont.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
