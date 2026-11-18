import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { Post } from '../../../000_models/post';
import { UpdateAllPostTitlesService } from './update-all-post-titles.service';

describe('UpdateAllPostTitlesService', () => {
  let service: UpdateAllPostTitlesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(UpdateAllPostTitlesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  it('waits for all title updates and returns their results', () => {
    const posts: Post[] = [
      { userId: 1, id: 1, title: 'First updated', body: 'Body 1' },
      { userId: 1, id: 2, title: 'Second updated', body: 'Body 2' },
    ];
    let result: Post[] | undefined;

    service.updateAllTitles(posts).subscribe((value) => (result = value));

    const requests = httpTestingController.match((request) => request.method === 'PUT');
    expect(requests).toHaveLength(2);
    expect(requests.map((request) => request.request.url)).toEqual([
      'https://jsonplaceholder.typicode.com/posts/1',
      'https://jsonplaceholder.typicode.com/posts/2',
    ]);
    expect(requests[0].request.body).toEqual({ title: 'First updated' });
    expect(requests[1].request.body).toEqual({ title: 'Second updated' });

    requests[1].flush(posts[1]);
    expect(result).toBeUndefined();
    requests[0].flush(posts[0]);
    expect(result).toEqual(posts);
  });

  it('returns an empty result without sending requests for an empty list', () => {
    let result: Post[] | undefined;

    service.updateAllTitles([]).subscribe((value) => (result = value));

    expect(result).toEqual([]);
    httpTestingController.expectNone('https://jsonplaceholder.typicode.com/posts');
  });
});
