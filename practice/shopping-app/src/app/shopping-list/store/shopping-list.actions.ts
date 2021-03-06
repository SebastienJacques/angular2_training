import { Action } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredient.model';

// create unique indentifier for the action
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const START_EDIT = 'START_EDIT';

// create an add class which uses the unique identifier as a type
export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENT;  // need to be provided to correspond to Action interface
    // add the payload that we need for getting new data
    // use a constructor for setting payload shen we want to add an ingredient
    constructor(public payload: Ingredient) {}
}

export class AddIngredients implements Action {
    readonly type = ADD_INGREDIENTS;
    constructor(public payload: Ingredient[]) {}
}

export class UpdateIngredient implements Action {
    readonly type = UPDATE_INGREDIENT;
    // constructor(public payload: {index: number, ingredient: Ingredient}) {}
    constructor(public payload: {ingredient: Ingredient}) {}
}

export class DeleteIngredient implements Action {
    readonly type = DELETE_INGREDIENT;
    // just pass the index
    // constructor(public payload: number) {}
}

export class StartEdit implements Action {
    readonly type = START_EDIT;
    constructor(public payload: number) {}
}

// export ShoppingListActions which will contains all of our exported actions added with union type operator
export type ShoppingListActions =
    AddIngredient |
    AddIngredients |
    UpdateIngredient |
    DeleteIngredient |
    StartEdit;
