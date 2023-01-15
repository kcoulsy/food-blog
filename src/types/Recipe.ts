export interface Recipe {
  title: string;
  hookDescription: string;
  imgSrc: string;
  ingredients: string[];
  cookingTimeInMins: number;
  calories: number;
  numberOfServings: number;
  keyDetails?: {
    dairyFree?: boolean;
    glutenFree?: boolean;
    eggFree?: boolean;
    milkFree?: boolean;
    nutFree?: boolean;
    soyFree?: boolean;
    vegan?: boolean;
    vegetarian?: boolean;
    lowCalorie?: boolean;
    lowFat?: boolean;
    lowCarb?: boolean;
    keto?: boolean;
    highFiber?: boolean;
    highProtein?: boolean;
  };
  nutrition?: {
    calories?: number;
    fat?: number;
    saturatedFat?: number;
    transFat?: number;
    cholesterol?: number;
    sodium?: number;
    potassium?: number;
    carbohydrates?: number;
    fiber?: number;
    sugar?: number;
    protein?: number;
    vitaminA?: number;
    vitaminC?: number;
    calcium?: number;
    iron?: number;
  };
  steps: string[];
  tips: string[];
}

export interface RecipeSchema {
  layout: string;
  title: string;
  hookDescription: string;
  url?: string;
  date: string;
  feature_image: string;
  ingredients: { ingredient: string; qty: number; unit: string }[];
  steps: { step: string }[];
  tips: { tip: string }[];
  calories: number;
  cookingTimeInMins: number;
  numberOfServings: number;
  keyDetails?: {
    dairyFree?: boolean;
    glutenFree?: boolean;
    eggFree?: boolean;
    milkFree?: boolean;
    nutFree?: boolean;
    soyFree?: boolean;
    vegan?: boolean;
    vegetarian?: boolean;
    lowCalorie?: boolean;
    lowFat?: boolean;
    lowCarb?: boolean;
    keto?: boolean;
    highFiber?: boolean;
    highProtein?: boolean;
  };
  nutrition?: {
    calories?: number;
    fat?: number;
    saturatedFat?: number;
    transFat?: number;
    cholesterol?: number;
    sodium?: number;
    potassium?: number;
    carbohydrates?: number;
    fiber?: number;
    sugar?: number;
    protein?: number;
    vitaminA?: number;
    vitaminC?: number;
    calcium?: number;
    iron?: number;
  };
}
