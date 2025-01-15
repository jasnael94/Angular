
export interface Recipe {
  id: number ,
  name: string ,
  description: string ,
  ingredients : Ingredient [];
}

export interface Ingredient {
  id: number ,
  name : string ,
  quantity : number,
  unit : number
}
