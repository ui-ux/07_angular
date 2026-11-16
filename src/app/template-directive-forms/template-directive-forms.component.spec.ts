import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateDirectiveFormsComponent } from './template-directive-forms.component';
import { AppModule } from '../app.module';

describe('TemplateDirectiveFormsComponent', () => {
  let component: TemplateDirectiveFormsComponent;
  let fixture: ComponentFixture<TemplateDirectiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDirectiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
