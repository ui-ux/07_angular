import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTestOneComponent } from './child-test-one.component';

describe('ChildTestOneComponent', () => {
  let component: ChildTestOneComponent;
  let fixture: ComponentFixture<ChildTestOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildTestOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildTestOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
