import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TheoryService {

  constructor(private http: HttpClient) { }

  mockGitMethod(): Observable<any> {
    return this.http.get('https://api.github.com/search/ressspositories?q=Angular')
      .pipe(
        retry(1)
      );
  }
}
