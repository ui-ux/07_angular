import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { GetPostByIdService } from './get-post-by-id.service';

describe('GetPostByIdService', () => {
  let service: GetPostByIdService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(GetPostByIdService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  it('gets a post by its identifier', () => {
    const post = { userId: 1, id: 7, title: 'Title', body: 'Body' };

    service.getPostById(7).subscribe((result) => expect(result).toEqual(post));

    const request = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts/7');
    expect(request.request.method).toBe('GET');
    request.flush(post);
  });
});
