import { Component } from '@angular/core';
import { Recipe } from '../../types/recipe';
import { RecipeService } from '../../services/recipe-service.service';

@Component({
  selector: 'app-list-of-recipe',
  standalone: true,
  imports: [],
  templateUrl: './list-of-recipe.component.html',
  styleUrl: './list-of-recipe.component.css'
})
export class ListOfRecipeComponent {
  recipes : Recipe[] = [];
  private RecipeService = inject(RecipeService);


ngOnInit(){
  this.recipes = this.RecipeService.recipes ;
}
}

