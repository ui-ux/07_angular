import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { PipesComponent } from './pipes-component';
import { AppModule } from '../app.module';

describe('PipesComponent', () => {
  let component: PipesComponent;
  let fixture: ComponentFixture<PipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('applies pipes to regular component values', () => {
    expect(fixture.nativeElement.textContent).toContain('testtext testtext');
    expect(fixture.nativeElement.textContent).toContain('TESTTEXT TESTTEXT');
    expect(component.testText).toBe('TestTexT TestTexT');
  });
});
