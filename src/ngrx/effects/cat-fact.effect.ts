import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CatService } from "src/app/services/cat.service";
import { CatFactActions } from "../actions/cat-fact.action";
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from "rxjs";
import { CatFact } from "src/app/models/cat-fact.model";
@Injectable()
export class CatFactEffects {
  constructor(public actions$: Actions, public catSv: CatService) {}

  loadCatFacts$ = createEffect(() => 
    this.actions$.pipe(
      ofType(CatFactActions.loadCatFacts), 
    switchMap(() => 
      this.catSv.getCatFacts(140,10).pipe(
      switchMap((catFacts: any) => {
        return this.catSv.getCatImages(10).pipe(
          map((catImages: any)=>{
            catFacts = catFacts['data'].map(
              (catFact: CatFact, index: number) => {
                return {...catFact, imageUrl: catImages[index]['url']};
              }
            );
            return CatFactActions.loadCatFactsSuccess(catFacts);
          }),
          catchError((error) => {
            return of(CatFactActions.loadCatFactsFailure(error))
          })
        )
      })
     ), 
     ), 
     )
  );
} 