import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForParentComponent } from './for-parent.component';

describe('ForParentComponent', () => {
  let component: ForParentComponent;
  let fixture: ComponentFixture<ForParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
