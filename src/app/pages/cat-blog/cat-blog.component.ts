import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CatFact } from 'src/app/models/cat-fact.model';
import { CatService } from 'src/app/services/cat.service';
import { CatFactActions } from 'src/ngrx/actions/cat-fact.action';
import { CatFactState } from 'src/ngrx/states/cat-fact.state';

@Component({
  selector: 'app-cat-blog',
  templateUrl: './cat-blog.component.html',
  styleUrls: ['./cat-blog.component.scss']
})
export class CatBlogComponent implements OnInit {
  listFacts$: Observable<CatFact[]>;
  constructor(public store: Store<{catFact: CatFactState}>){ 
    this.listFacts$ = store.select(state => state.catFact.catFacts)
  }
  ngOnInit(): void {
    this.getCatFacts();
  }
  async getCatFacts() {
    
    this.store.dispatch(CatFactActions.loadCatFacts())
  }
}
