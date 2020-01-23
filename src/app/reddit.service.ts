import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class redditService {
  public __url: string="https://www.reddit.com/r/aww/.json"

  constructor(private __http: HttpClient) {
  }


  // make a call 
  // receive the resp as observable
  // convert it to an  observable array
  fetchAwwSubreddit(): Observable<any> {
    return this.__http.get(this.__url).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error")
  }
}

