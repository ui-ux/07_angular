import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { NgClassComponent } from './ng-class-component';
import { AppModule } from '../app.module';

describe('NgClassComponent', () => {
  let component: NgClassComponent;
  let fixture: ComponentFixture<NgClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('updates the rendered classes when the component property changes', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    const example: HTMLElement = fixture.nativeElement.querySelector('tr:last-child td:last-child');

    button.click();
    fixture.detectChanges();

    expect(component.highlighted).toBe(true);
    expect(example.classList).toContain('bg-tomato');
    expect(example.classList).toContain('color-white');
  });
});
