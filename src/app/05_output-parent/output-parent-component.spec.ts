import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { OutputParentComponent } from './output-parent-component';
import { AppModule } from '../app.module';

describe('OutputParentComponent', () => {
  let component: OutputParentComponent;
  let fixture: ComponentFixture<OutputParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(OutputParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('receives the child output in a regular component property', () => {
    const buttons: NodeListOf<HTMLButtonElement> =
      fixture.nativeElement.querySelectorAll('child-output-parent button');
    const button = buttons[1];
    button.click();
    fixture.detectChanges();

    expect(component.receivedItem).toBe('test string');
    expect(fixture.nativeElement.textContent).toContain('test string');
  });
});
