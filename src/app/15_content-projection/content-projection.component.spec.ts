import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { ContentProjectionComponent } from './content-projection.component';

describe('ContentProjectionComponent', () => {
  let fixture: ComponentFixture<ContentProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentProjectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentProjectionComponent);
    fixture.detectChanges();
  });

  it('projects supplied content into the selected card slots', () => {
    const card = fixture.nativeElement.querySelector('app-projection-card');

    expect(card.querySelector('header h3')?.textContent.trim()).toBe('Projected title');
    expect(card.querySelector('div p')?.textContent.trim()).toBe(
      'This paragraph is projected into the default slot.',
    );
    expect(card.querySelector('footer button')?.textContent.trim()).toBe('Projected action');
  });
});
