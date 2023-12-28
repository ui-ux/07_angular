import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOutputParentComponent } from './child-output-parent.component';

describe('ChildOutputParentComponent', () => {
  let component: ChildOutputParentComponent;
  let fixture: ComponentFixture<ChildOutputParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildOutputParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildOutputParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
