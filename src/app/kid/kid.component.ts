import { Component, input } from '@angular/core';
import { uppcaseAttribute } from '../child/child.component';

@Component({
  selector: 'app-kid',
  standalone: true,
  imports: [],
  templateUrl: './kid.component.html',
  styleUrl: './kid.component.scss',
})
export class KidComponent {
  name = input.required({
    transform: uppcaseAttribute,
  });
}
