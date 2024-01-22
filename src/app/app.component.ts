import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NavigationStart,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { ChildComponent } from './child/child.component';
import { KidComponent } from './kid/kid.component';
import { InfoService } from './info.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ChildComponent,
    KidComponent,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent {
  title = 'ng 17.1.0';
  name = signal('');
  cdr = inject(ChangeDetectorRef);
  router = inject(Router);
  service = inject(InfoService);
  // e$ = this.router.events
  //   .pipe(filter((event) => event instanceof NavigationStart))
  //   .subscribe((data) => {
  //     (
  //       this.router.getCurrentNavigation()?.extras.info as InfoService
  //     )?.interval.subscribe((v) => console.log(v));
  // console.log(this.router.getCurrentNavigation()?.extras?.info);
  // });
  setName(value: string) {
    this.name.set(value);
    this.cdr.detectChanges();
  }
}
