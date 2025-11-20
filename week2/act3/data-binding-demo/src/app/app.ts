import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingDemos } from './data-binding-demos/data-binding-demos';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataBindingDemos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('data-binding-demo');
}
