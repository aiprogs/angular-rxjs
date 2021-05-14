import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  constructor() {
  }

  getSomeData(someData: string): Observable<SomeData> {
    return of({
      someData,
      name: 'MockService',
      description: 'Description MockService'
    });
  }
}

export interface SomeData {
  name: string;
  description: string;
}
