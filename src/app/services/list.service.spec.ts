import { TestBed } from '@angular/core/testing';

import { ListService } from './list.service';
import { AppModule } from '../app.module';

describe('ListService', () => {
  let service: ListService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [AppModule] });
    service = TestBed.inject(ListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
