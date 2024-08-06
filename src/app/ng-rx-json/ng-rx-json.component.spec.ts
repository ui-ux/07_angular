import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRxJsonComponent } from './ng-rx-json.component';

describe('NgRxJsonComponent', () => {
  let component: NgRxJsonComponent;
  let fixture: ComponentFixture<NgRxJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgRxJsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgRxJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
