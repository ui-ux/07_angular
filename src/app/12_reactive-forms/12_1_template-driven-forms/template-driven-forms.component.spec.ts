import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateDirectiveFormsComponent } from './template-driven-forms.component';

describe('TemplateDirectiveFormsComponent', () => {
  let component: TemplateDirectiveFormsComponent;
  let fixture: ComponentFixture<TemplateDirectiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDirectiveFormsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateDirectiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('updates the model from the template and saves a submitted snapshot', () => {
    const nameInput = fixture.nativeElement.querySelector('#name') as HTMLInputElement;
    nameInput.value = 'Ada';
    nameInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.userModel.name).toBe('Ada');

    component.onSubmit();

    expect(component.submittedUser?.name).toBe('Ada');
    component.userModel.name = 'Grace';
    expect(component.submittedUser?.name).toBe('Ada');
  });
});
