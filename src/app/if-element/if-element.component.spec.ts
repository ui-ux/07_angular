import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IfElementComponent } from './if-elementcomponent';



describe('IfElementComponent', () => {
  let component: IfElementComponent;
  let fixture: ComponentFixture<IfElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
