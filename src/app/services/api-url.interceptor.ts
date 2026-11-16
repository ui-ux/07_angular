import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment';

@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.url.startsWith('/api/')) {
      return next.handle(request);
    }

    const apiBaseUrl = environment.apiUrl.replace(/\/+$/, '');
    const apiRequest = request.clone({
      url: `${apiBaseUrl}${request.url.slice('/api'.length)}`,
    });

    return next.handle(apiRequest);
  }
}
