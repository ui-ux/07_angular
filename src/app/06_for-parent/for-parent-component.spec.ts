import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { ForParentComponent } from './for-parent-component';
import { AppModule } from '../app.module';

describe('ForParentComponent', () => {
  let component: ForParentComponent;
  let fixture: ComponentFixture<ForParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ForParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders each item and adds an item when the signal changes', () => {
    expect(fixture.nativeElement.querySelectorAll('section').length).toBe(3);

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();

    expect(component.testData()).toHaveLength(4);
    expect(fixture.nativeElement.textContent).toContain('New item');
  });

  it('shows the empty-list branch', () => {
    expect(fixture.nativeElement.textContent).toContain('Немає даних для показу.');
  });
});
