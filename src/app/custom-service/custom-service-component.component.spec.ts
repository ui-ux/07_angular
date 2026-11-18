import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CustomServiceComponent } from './custom-service-component.component';
import { beforeEach, describe, expect, it } from 'vitest';

describe('CustomServiceComponent', () => {
  let component: CustomServiceComponent;
  let fixture: ComponentFixture<CustomServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomServiceComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
