import { createReducer, on } from "@ngrx/store";


import { CatFactActions } from "../actions/cat-fact.action";
import { CatFactState } from "../states/cat-fact.state";


export const initialState: CatFactState = {
  catFacts:[],
  isLoading: false,
  error: '',
};

export const catFactReducer = createReducer(
  initialState, 
  on(CatFactActions.loadCatFacts, (state) => ({...state, isLoading: true})),
  
  on(CatFactActions.loadCatFactsSuccess,(state,{catFacts}) => ({...state, catFacts, isLoading:false})),

  on(CatFactActions.loadCatFactsFailure,(state, {error}) => ({...state, isLoading: false, error}))
);