import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { GetPostsService } from './get-posts.service';

describe('GetPostsService', () => {
  let service: GetPostsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(GetPostsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  it('gets the posts collection without query parameters', () => {
    const posts = [{ userId: 1, id: 1, title: 'First', body: 'Body' }];

    service.getPosts().subscribe((result) => expect(result).toEqual(posts));

    const request = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(request.request.method).toBe('GET');
    request.flush(posts);
  });
});
