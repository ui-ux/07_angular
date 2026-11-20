import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { UnsavedChangesGuard } from './unsaved-changes.guard';
import { UnsavedChangesComponent } from './unsaved-changes.component';

describe('UnsavedChangesComponent and guard', () => {
  let component: UnsavedChangesComponent;
  let fixture: ComponentFixture<UnsavedChangesComponent>;
  let guard: UnsavedChangesGuard;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnsavedChangesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UnsavedChangesComponent);
    component = fixture.componentInstance;
    guard = new UnsavedChangesGuard();
    fixture.detectChanges();
  });

  it('allows navigation when the draft is unchanged or saved', () => {
    expect(guard.canDeactivate(component)).toBe(true);

    component.draft = 'Updated draft.';
    component.saveChanges();

    expect(guard.canDeactivate(component)).toBe(true);
  });

  it('asks before leaving when the draft has unsaved changes', () => {
    component.draft = 'Updated draft.';
    const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(false);

    expect(guard.canDeactivate(component)).toBe(false);
    expect(confirmSpy).toHaveBeenCalledWith('You have unsaved changes. Leave this page?');

    confirmSpy.mockRestore();
  });
});
