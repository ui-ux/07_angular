import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsComponent } from './reactive-forms.component';
import { AppModule } from '../app.module';

describe('ReactiveFormsComponent', () => {
  let component: ReactiveFormsComponent;
  let fixture: ComponentFixture<ReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
