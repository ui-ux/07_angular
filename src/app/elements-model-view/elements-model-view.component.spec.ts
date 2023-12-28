import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsModelViewComponent } from './elements-model-view.component';

describe('ElementsModelViewComponent', () => {
  let component: ElementsModelViewComponent;
  let fixture: ComponentFixture<ElementsModelViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementsModelViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElementsModelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
