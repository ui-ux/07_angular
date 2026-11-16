import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';

import { ElementsModelViewComponent } from './elements-model-view-component';
import { AppModule } from '../app.module';

describe('ElementsModelViewComponent', () => {
  let component: ElementsModelViewComponent;
  let fixture: ComponentFixture<ElementsModelViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ElementsModelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('updates the signal value and its computed name length', () => {
    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;

    input.value = 'Grace';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    fixture.detectChanges();

    expect(component.person.name).toBe('your Name');
    expect(component.signalPerson().name).toBe('Grace');
    expect(component.signalPersonNameLength()).toBe(5);
    expect(fixture.nativeElement.textContent).toContain('Name length updates automatically: 5');
  });
});
