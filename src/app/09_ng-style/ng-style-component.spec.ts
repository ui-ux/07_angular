import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { NgStyleComponent } from './ng-style-component';
import { AppModule } from '../app.module';

describe('NgStyleComponent', () => {
  let component: NgStyleComponent;
  let fixture: ComponentFixture<NgStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('applies inline styles and ngStyle objects', () => {
    const examples: NodeListOf<HTMLElement> = fixture.nativeElement.querySelectorAll('td:last-child');

    expect(examples[0].style.textDecoration).toBe('underline');
    expect(examples[2].style.color).toBe('red');
    expect(examples[2].style.fontSize).toBe('16px');
  });
});
