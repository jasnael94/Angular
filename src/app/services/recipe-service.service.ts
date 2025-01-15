import { Injectable } from '@angular/core';
import { Recipe,Ingredient } from '../types/recipe';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes : Recipe[]=[
    { id:1,name:"Pizza",description:"c'est une pizza au jambon",ingredients:[{1,"Jambon",1,20}]},
    { id:2,name:"Pizza Thon",description:"c'est une pizza au thon",ingredients:["pate,Thon,jambon"]},
    { id:3,name:"Pizza Veggie",description:"c'est une pizza aux choux",ingredients:["pate,Choux,jambon"]}

  ]
}

export class IngredientsService{
  ingredients : Ingredient[]=[
    {id:1, name:"Jambon",quantity:1,unit:20},
    {id:2, name:"Thon",quantity:1,unit:50},
    {id:3, name:"Choux",quantity:1,unit:23}
  ]
}
