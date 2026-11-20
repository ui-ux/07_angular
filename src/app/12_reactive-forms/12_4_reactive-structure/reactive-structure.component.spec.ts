import { FormControl } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { ReactiveStructureComponent } from './reactive-structure.component';

describe('ReactiveStructureComponent', () => {
  let component: ReactiveStructureComponent;
  let fixture: ComponentFixture<ReactiveStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveStructureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('adds and removes controls through the view without losing remaining values', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button');
    buttons[0].click();
    buttons[0].click();
    fixture.detectChanges();

    const emailInputs = fixture.nativeElement.querySelectorAll(
      'input[type="email"]',
    ) as NodeListOf<HTMLInputElement>;
    expect(emailInputs).toHaveLength(2);

    emailInputs[1].value = 'second@example.com';
    emailInputs[1].dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const removeButtons = fixture.nativeElement.querySelectorAll(
      'div.form-group button',
    ) as NodeListOf<HTMLButtonElement>;
    removeButtons[0].click();
    fixture.detectChanges();

    expect(component.alternateEmails.length).toBe(1);
    expect(
      (fixture.nativeElement.querySelector('input[type="email"]') as HTMLInputElement).value,
    ).toBe('second@example.com');
  });

  it('loads a nested address and submits the nested form value', () => {
    const buttons = fixture.nativeElement.querySelectorAll(
      'button',
    ) as NodeListOf<HTMLButtonElement>;
    const loadExampleButton = Array.from(buttons).find((button) =>
      button.textContent.includes('Load example address'),
    ) as HTMLButtonElement;
    loadExampleButton.click();
    component.alternateEmails.push(new FormControl('alternate@example.com', { nonNullable: true }));
    fixture.detectChanges();

    const submitButton = fixture.nativeElement.querySelector(
      'button[type="submit"]',
    ) as HTMLButtonElement;
    submitButton.click();
    fixture.detectChanges();

    expect(component.submittedValue).toEqual({
      address: { city: 'Kyiv', state: 'Kyiv region', postalCode: '01001' },
      alternateEmails: ['alternate@example.com'],
    });
    expect(fixture.nativeElement.textContent).toContain('alternate@example.com');
  });
});
