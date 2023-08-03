import { CatFact } from "src/app/models/cat-fact.model";

export interface CatFactState {
  catFacts: CatFact[];
  isLoading: boolean;
  error: string;
}