export class Recipe {
    cuisine: string;
    description: string;
    imgUrl: string;
    ingredients: Ingredient[];
    name: string;
    note: string;
    totalTime: string;
    calories: string;
    carbohydrate: string;
    fat: string;
    fiber: string;
    protein: string;
    saturatedFat: string;
    sodium: string;
    sugar: string;
}

export class Ingredient {
    ingredient: string;
    url: string;
}
