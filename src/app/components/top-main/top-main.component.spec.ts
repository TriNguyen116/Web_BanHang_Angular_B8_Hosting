import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMainComponent } from './top-main.component';

describe('TopMainComponent', () => {
  let component: TopMainComponent;
  let fixture: ComponentFixture<TopMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopMainComponent]
    });
    fixture = TestBed.createComponent(TopMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
