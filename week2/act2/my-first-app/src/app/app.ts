import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./footer/footer";
import { Header } from './header/header';
import { Skills } from './skills/skills';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, Skills],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-app');
}
