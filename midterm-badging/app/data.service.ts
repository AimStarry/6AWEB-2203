import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, catchError, of } from 'rxjs';

export interface Post {
  id: number;
  title: string;
  body: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  // 1. Declare the observable type
  public posts$: Observable<Post[]>;

  constructor(private http: HttpClient) {
    // 2. Assign the observable here where 'this.http' is defined
    this.posts$ = this.http.get<Post[]>(this.url).pipe(
      shareReplay(1),
      catchError(() => of([]))
    );
  }
}
