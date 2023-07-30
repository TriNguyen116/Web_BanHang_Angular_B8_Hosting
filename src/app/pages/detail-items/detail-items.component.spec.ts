import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailItemsComponent } from './detail-items.component';

describe('DetailItemsComponent', () => {
  let component: DetailItemsComponent;
  let fixture: ComponentFixture<DetailItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailItemsComponent]
    });
    fixture = TestBed.createComponent(DetailItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
