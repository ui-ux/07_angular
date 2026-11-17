import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsComponent } from './reactive-forms.component';

describe('ReactiveFormsComponent', () => {
  let component: ReactiveFormsComponent;
  let fixture: ComponentFixture<ReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows the username error only after the control is touched', () => {
    const control = component.registrationForm.controls.userName;
    control.setValue('ab');
    fixture.detectChanges();

    expect(component.userNameHasVisibleError).toBe(false);

    control.markAsTouched();
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('#reactive-user-name') as HTMLInputElement;
    expect(component.userNameHasVisibleError).toBe(true);
    expect(input.classList.contains('is-invalid')).toBe(true);
    expect(input.getAttribute('aria-invalid')).toBe('true');
    expect(fixture.nativeElement.textContent).toContain('Enter at least 3 characters.');
  });

  it('marks invalid controls touched and only saves valid values', () => {
    component.onSubmit();
    expect(component.registrationForm.controls.userName.touched).toBe(true);
    expect(component.submittedUser).toBeNull();

    component.registrationForm.setValue({ userName: 'Ada', email: 'ada@example.com' });
    component.onSubmit();

    expect(component.submittedUser).toEqual({ userName: 'Ada', email: 'ada@example.com' });
  });
});
