import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTestTwoComponent } from './child-test-two.component';

describe('ChildTestTwoComponent', () => {
  let component: ChildTestTwoComponent;
  let fixture: ComponentFixture<ChildTestTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildTestTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildTestTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
