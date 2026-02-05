import { Component, inject } from '@angular/core'; // Added inject
import { CommonModule } from '@angular/common';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { DataService, Post } from '../data.service';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  // Use inject() to fix the "used before initialization" error
  private dataService = inject(DataService);

  search$ = new BehaviorSubject<string>('');

  filtered$: Observable<Post[]> = combineLatest([
    this.dataService.posts$,
    this.search$
  ]).pipe(
    map(([posts, term]) =>
      posts.filter(p =>
        p.title.toLowerCase().includes(term.toLowerCase()) ||
        p.body.toLowerCase().includes(term.toLowerCase())
      )
    )
  );

  updateSearch(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.search$.next(val);
  }
}
