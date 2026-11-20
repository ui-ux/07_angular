import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { beforeEach, describe, expect, it } from 'vitest';
import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationComponent, TranslateModule.forRoot()],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationComponent);
    fixture.detectChanges();
  });

  it('renders the learning navigation and expected form, HTTP, and concept routes', () => {
    const navigation = fixture.nativeElement.querySelector('nav') as HTMLElement;
    const links = Array.from(
      navigation.querySelectorAll<HTMLButtonElement>('button[routerLink]'),
    ).map((button) => button.getAttribute('routerLink'));

    expect(navigation.getAttribute('aria-label')).toBe('Навігація за навчальними розділами');
    expect(links).toContain('reactive-structure');
    expect(links).toContain('client-delete-post');
    expect(links).toContain('directives');
    expect(links).toContain('content-projection');
    expect(links).toContain('unsaved-changes');
    expect(links).not.toContain('concepts');
  });
});
