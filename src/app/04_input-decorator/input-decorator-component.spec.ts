import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { InputDecoratorComponent } from './input-decorator-component';
import { AppModule } from '../app.module';

describe('InputDecoratorComponent', () => {
  let component: InputDecoratorComponent;
  let fixture: ComponentFixture<InputDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(InputDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('compares a regular input with a signal input that follows parent updates', () => {
    const child: HTMLElement = fixture.nativeElement.querySelector('child-input-decorator');
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');

    expect(child.textContent).toContain('Regular @Input(): Test name 1');
    expect(child.textContent).toContain('Signal input(): Test name 1');

    button.click();
    fixture.detectChanges();

    expect(child.textContent).toContain('Regular @Input(): Test name 1');
    expect(child.textContent).toContain('Signal input(): Test name 2');
  });
});
