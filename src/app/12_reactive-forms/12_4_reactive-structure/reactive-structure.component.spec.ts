import { FormControl } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveStructureComponent } from './reactive-structure.component';

describe('ReactiveStructureComponent', () => {
  let component: ReactiveStructureComponent;
  let fixture: ComponentFixture<ReactiveStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveStructureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('adds and removes controls in the alternate email FormArray', () => {
    component.addAlternateEmail();
    component.addAlternateEmail();
    component.alternateEmails.at(1).setValue('second@example.com');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('input[type="email"]')).toHaveLength(2);

    component.removeAlternateEmail(0);

    expect(component.alternateEmails.length).toBe(1);
    expect(component.alternateEmails.at(0).value).toBe('second@example.com');
  });

  it('loads the sample address and submits the nested form value', () => {
    component.loadExample();
    component.alternateEmails.push(new FormControl('alternate@example.com', { nonNullable: true }));
    component.onSubmit();

    expect(component.submittedValue).toEqual({
      address: { city: 'Kyiv', state: 'Kyiv region', postalCode: '01001' },
      alternateEmails: ['alternate@example.com'],
    });
  });
});
