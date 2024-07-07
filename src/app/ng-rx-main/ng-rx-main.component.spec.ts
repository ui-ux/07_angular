import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRxMainComponent } from './ng-rx-main.component';

describe('NgRxMainComponent', () => {
  let component: NgRxMainComponent;
  let fixture: ComponentFixture<NgRxMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgRxMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgRxMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
