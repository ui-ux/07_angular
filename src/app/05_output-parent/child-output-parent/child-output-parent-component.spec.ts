import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildOutputParentComponent } from './child-output-parent-component';
import { AppModule } from '../../app.module';

describe('ChildOutputParentComponent', () => {
  let component: ChildOutputParentComponent;
  let fixture: ComponentFixture<ChildOutputParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildOutputParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
