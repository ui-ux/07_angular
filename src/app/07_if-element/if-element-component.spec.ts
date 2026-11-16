import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { IfElementComponent } from './if-element-component';
import { AppModule } from '../app.module';

describe('IfElementComponent', () => {
  let component: IfElementComponent;
  let fixture: ComponentFixture<IfElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(IfElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows the branch selected by the component property', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button');
    buttons[1].click();
    fixture.detectChanges();

    expect(component.status).toBe('loading');
    expect(fixture.nativeElement.textContent).toContain('Завантажуємо дані');

    buttons[2].click();
    fixture.detectChanges();

    expect(component.status).toBe('empty');
    expect(fixture.nativeElement.textContent).toContain('Даних поки немає.');
  });
});
