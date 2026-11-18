import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { GetPagedPostsService } from './get-paged-posts.service';

describe('GetPagedPostsService', () => {
  let service: GetPagedPostsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(GetPagedPostsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  it('sends the requested page and page size as query parameters', () => {
    service.loadPage(2, 5).subscribe();

    const request = httpTestingController.expectOne(
      (request) =>
        request.url === 'https://jsonplaceholder.typicode.com/posts' &&
        request.params.get('_page') === '2' &&
        request.params.get('_limit') === '5',
    );
    expect(request.request.method).toBe('GET');
    request.flush([]);
  });
});
