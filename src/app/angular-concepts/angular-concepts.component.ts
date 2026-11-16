import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  computed,
  signal,
} from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormArray,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { FocusTargetComponent } from './components/focus-target.component';
import type { ConceptLesson } from './services/concept-lesson.resolver';

const usernameAvailableValidator = (): AsyncValidatorFn => control =>
  timer(400).pipe(
    map(() => String(control.value).trim().toLowerCase() === 'admin'
      ? { usernameTaken: true }
      : null),
    take(1),
  );

const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const confirmation = control.get('confirmPassword')?.value;

  return password && confirmation && password !== confirmation
    ? { passwordMismatch: true }
    : null;
};

@Component({
  standalone: false,
  selector: 'app-angular-concepts',
  templateUrl: './angular-concepts.component.html',
  styleUrl: './angular-concepts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularConceptsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(FocusTargetComponent) private focusTarget!: FocusTargetComponent;

  readonly count = signal(0);
  readonly doubledCount = computed(() => this.count() * 2);
  readonly lesson: ConceptLesson;
  readonly form: FormGroup<{
    username: FormControl<string>;
    email: FormControl<string>;
    password: FormControl<string>;
    confirmPassword: FormControl<string>;
    tags: FormArray<FormControl<string>>;
  }>;
  createdAt = '';
  submittedValues: string | null = null;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    route: ActivatedRoute,
  ) {
    this.lesson = route.snapshot.data['lesson'] as ConceptLesson;
    this.form = this.formBuilder.group({
      username: this.formBuilder.control('learner', {
        validators: [Validators.required, Validators.minLength(3)],
        asyncValidators: [usernameAvailableValidator()],
        updateOn: 'blur',
      }),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: this.formBuilder.control('', Validators.required),
      tags: this.formBuilder.array([this.formBuilder.control('')]),
    }, { validators: passwordMatchValidator });
  }

  ngOnInit(): void {
    this.createdAt = new Date().toLocaleTimeString();
  }

  ngAfterViewInit(): void {
    console.info('@ViewChild is available after ngAfterViewInit.');
  }

  ngOnDestroy(): void {
    console.info('Advanced Angular concepts page destroyed.');
  }

  get tags(): FormArray<FormControl<string>> {
    return this.form.controls.tags;
  }

  get hasUnsavedChanges(): boolean {
    return this.form.dirty;
  }

  increment(): void {
    this.count.update(value => value + 1);
  }

  focusInput(): void {
    this.focusTarget.focusInput();
  }

  addTag(): void {
    this.tags.push(this.formBuilder.control(''));
    this.tags.markAsDirty();
  }

  removeTag(index: number): void {
    if (this.tags.length > 1) {
      this.tags.removeAt(index);
      this.tags.markAsDirty();
    }
  }

  submitForm(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid || this.form.pending) {
      return;
    }

    this.submittedValues = JSON.stringify(this.form.getRawValue(), null, 2);
    this.form.markAsPristine();
  }
}
