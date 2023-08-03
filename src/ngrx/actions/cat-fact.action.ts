import { createAction } from "@ngrx/store";
import { CatFact } from "src/app/models/cat-fact.model";

export const CatFactActions = {
  // (catFacts: any) => ({catFacts}) co nghia la '[CatFact] Load CatFacts Success' duoc goi co tra ve cho no 1 bien tai thoi diem do hay khong 
  // ngoai ra con cac hanh CUD: hien chi co R
  loadCatFacts: createAction('[CatFact] Load CatFacts'),
  loadCatFactsSuccess: createAction(
    '[CatFact] Load CatFacts Success', 
  (catFacts: CatFact[]) => ({
   
    catFacts,
    
  })
    
  ), 
   
  loadCatFactsFailure: createAction('[CatFact] Load CatFacts Failure', (error: string) => ({error}) ),
} 