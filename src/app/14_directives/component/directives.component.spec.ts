import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { DirectivesComponent } from './directives.component';

describe('DirectivesComponent', () => {
  let fixture: ComponentFixture<DirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectivesComponent);
    fixture.detectChanges();
  });

  it('highlights the element on mouseenter and resets on mouseleave', () => {
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;

    button.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();

    expect(button.style.backgroundColor).toBe('rgb(219, 234, 254)');
    expect(button.style.color).toBe('rgb(30, 64, 175)');
    expect(button.style.borderColor).toBe('rgb(37, 99, 235)');

    button.dispatchEvent(new Event('mouseleave'));
    fixture.detectChanges();

    expect(button.style.backgroundColor).toBe('');
    expect(button.style.color).toBe('');
    expect(button.style.borderColor).toBe('');
  });

  it('highlights the element on focus and resets on blur', () => {
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;

    button.dispatchEvent(new Event('focus'));
    fixture.detectChanges();

    expect(button.style.backgroundColor).toBe('rgb(219, 234, 254)');

    button.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    expect(button.style.backgroundColor).toBe('');
  });
});
