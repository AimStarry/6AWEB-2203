import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { map } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private dataService = inject(DataService);

  latestPosts$ = this.dataService.posts$.pipe(
    map(posts => posts.slice(0, 5))
  );
}
