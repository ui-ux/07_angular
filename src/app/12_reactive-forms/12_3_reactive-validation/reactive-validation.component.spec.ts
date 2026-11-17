import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveValidationComponent } from './reactive-validation.component';

describe('ReactiveValidationComponent', () => {
  let component: ReactiveValidationComponent;
  let fixture: ComponentFixture<ReactiveValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveValidationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('reports the forbidden username after it is touched', () => {
    const control = component.form.controls.userName;
    control.setValue('admin');
    control.markAsTouched();
    fixture.detectChanges();

    expect(component.userNameForbiddenError).toBe(true);
    expect(fixture.nativeElement.textContent).toContain('The username "admin" is not allowed.');
  });

  it('validates matching passwords and conditionally requires email', () => {
    const { password, confirmPassword, subscribe, email } = component.form.controls;
    password.setValue('password123');
    confirmPassword.setValue('different123');
    password.markAsDirty();
    confirmPassword.markAsDirty();
    confirmPassword.markAsTouched();
    component.form.updateValueAndValidity();

    expect(component.form.hasError('misMatch')).toBe(true);
    expect(component.passwordMismatchVisible).toBe(true);

    subscribe.setValue(true);
    expect(email.hasError('required')).toBe(true);

    subscribe.setValue(false);
    expect(email.valid).toBe(true);
  });

  it('marks an invalid form touched without submitting it', () => {
    component.onSubmit();

    expect(component.form.controls.userName.touched).toBe(true);
    expect(component.submittedValue).toBeNull();
  });
});
