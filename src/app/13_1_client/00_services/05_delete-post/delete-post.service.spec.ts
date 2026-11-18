import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { DeletePostService } from './delete-post.service';

describe('DeletePostService', () => {
  let service: DeletePostService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(DeletePostService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  it('deletes a post by its identifier', () => {
    service.deletePost(7).subscribe();

    const request = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts/7');
    expect(request.request.method).toBe('DELETE');
    request.flush(null);
  });
});
