import { Routes } from '@angular/router';
import { Main } from './main/main';
import { About } from './about/about';
import { Join } from './join/join';
import { Partners } from './partners/partners';

export const routes: Routes = [
  {path: 'main', component: Main},
  {path: 'about', component: About},
  {path: 'join', component: Join},
  {path: 'partners', component: Partners}
];
