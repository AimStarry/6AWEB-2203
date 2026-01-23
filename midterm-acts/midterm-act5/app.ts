import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { User } from './user.model';
import { Album } from './album.model';
import { HttpclientService } from './httpclient';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  protected readonly title = signal('http-client-demo');

  users: User[] = [];
  albums: Album[] = [];

  constructor(private httpclient: HttpclientService) {}

  ngOnInit(): void {
    this.httpclient.getUsersRemotely().subscribe(data => {
      this.users = data;
      console.log('Users loaded:', data);
    });

    this.httpclient.getAlbumsRemotely().subscribe(data => {
      this.albums = data;
      console.log('Albums loaded:', data);
    });
  }
}