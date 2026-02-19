import { Routes } from '@angular/router';
import { ReactiveDemo } from './reactive-demo/reactive-demo';
import { TemplateDemo } from './template-demo/template-demo';
import { CustomForm } from './custom-form/custom-form';

export const routes: Routes = [
  {path: 'reactive-demo', component: ReactiveDemo},
  {path: 'template-demo', component: TemplateDemo},
  {path: 'custom-form', component: CustomForm}
];
