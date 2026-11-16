import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface ConceptLesson {
  title: string;
  description: string;
  topics: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ConceptLessonResolver implements Resolve<ConceptLesson> {
  resolve(): Observable<ConceptLesson> {
    return of({
      title: 'Поглиблені концепції Angular',
      description: 'Приклади функцій, яких бракувало в початковому навчальному наборі.',
      topics: [
        'lifecycle',
        'ViewChild',
        'ng-content',
        'директива та pipe',
        'Signals',
        'OnPush',
        'Reactive Forms',
        'CanDeactivate',
      ],
    }).pipe(delay(150));
  }
}
