import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export function uppcaseAttribute(value: string) {
  return value.toUpperCase();
}

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input({ required: true, transform: uppcaseAttribute }) name = '';
  route = inject(ActivatedRoute).snapshot;
}
