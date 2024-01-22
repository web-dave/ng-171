import { Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { KidComponent } from './kid/kid.component';

export const routes: Routes = [
  {
    path: 'hero/:name',
    component: ChildComponent,
  },
  {
    path: 'radio/:name',
    component: KidComponent,
  },
];
