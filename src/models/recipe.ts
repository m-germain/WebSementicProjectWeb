export class Recipe {
    cuisine: string;
    description: string;
    imgUrl: string;
    ingredients: Ingredient[];
    name: string;
    note: string;
    totalTime: string;
}

export class Ingredient {
    ingredient: string;
}
