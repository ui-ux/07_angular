import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { UpdatePostTitleService } from './update-post-title.service';

describe('UpdatePostTitleService', () => {
  let service: UpdatePostTitleService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(UpdatePostTitleService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  it('updates one post title with PUT', () => {
    const updatedPost = { userId: 1, id: 7, title: 'Updated', body: 'Body' };

    service.updateTitle(7, 'Updated').subscribe((result) => expect(result).toEqual(updatedPost));

    const request = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts/7');
    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual({ title: 'Updated' });
    request.flush(updatedPost);
  });
});
