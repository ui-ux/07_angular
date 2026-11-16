import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { SwitchComponent } from './switch-component';
import { AppModule } from '../app.module';

describe('SwitchComponent', () => {
  let component: SwitchComponent;
  let fixture: ComponentFixture<SwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('switches the rendered branch from the selected value', () => {
    const buttons: NodeListOf<HTMLButtonElement> = fixture.nativeElement.querySelectorAll('button');
    buttons[1].click();
    fixture.detectChanges();

    expect(component.current).toBe('dos');
    expect(fixture.nativeElement.textContent).toContain('Ви обрали dos.');
  });
});
