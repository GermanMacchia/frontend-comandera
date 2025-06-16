/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { securityHeaders } from './security-headers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authReq = this.setSecurityHeaders(req);

    return next.handle(authReq);
  }

  private setSecurityHeaders(req: HttpRequest<any>): HttpRequest<any> {
    return req.clone({
      headers: req.headers
        .set(
          securityHeaders.xContentType.header,
          securityHeaders.xContentType.content
        )
        .set(
          securityHeaders.strinctTransport.header,
          securityHeaders.strinctTransport.content
        )
        .set(
          securityHeaders.xFrameOpt.header,
          securityHeaders.xFrameOpt.content
        )
        .set(
          securityHeaders.referrerPolicy.header,
          securityHeaders.referrerPolicy.content
        )
        .set(
          securityHeaders.xPermCrossDomPol.header,
          securityHeaders.xPermCrossDomPol.content
        )
        .set(
          securityHeaders.contentSecurity.header,
          securityHeaders.contentSecurity.content
        ),
    });
  }
}

export const AuthInterceptorProvider = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
