import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  interval = interval(5000);
  constructor() {}
}
