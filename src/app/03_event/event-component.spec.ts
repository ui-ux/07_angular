import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { EventComponent } from './event-component';

describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('updates the standard property on input', () => {
    const input: HTMLInputElement = fixture.nativeElement.querySelector('#standard-name');
    input.value = 'Ada';
    input.dispatchEvent(new Event('input', { bubbles: true }));

    expect(component.standardName).toBe('Ada');
  });

  it('updates the signal on input', () => {
    const input: HTMLInputElement = fixture.nativeElement.querySelector('#signal-name');
    input.value = 'Grace';
    input.dispatchEvent(new Event('input', { bubbles: true }));

    expect(component.signalName()).toBe('Grace');
    expect(component.signalNameLength()).toBe(5);
    expect(component.signalNameStatus()).toBe('Long name');
  });

  it('recomputes the signal status when the name changes', () => {
    component.signalName.set('Ada');

    expect(component.signalNameLength()).toBe(3);
    expect(component.signalNameStatus()).toBe('Short name');
  });

  it('shows the standard-property message beside its button', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector(
      '.event-example:first-of-type button',
    );
    button.click();

    expect(component.standardMessage).toBe('Clicked for Name Person');
  });

  it('shows the signal message beside its button', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector(
      '.event-example:last-of-type button',
    );
    button.click();

    expect(component.signalMessage()).toBe('Clicked for Name Person');
  });
});
