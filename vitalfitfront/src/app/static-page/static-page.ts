import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-static-page',
  imports: [AsyncPipe],
  template: `
    @if (route.data | async; as page) {
      <main class="page">
        <h1>{{ page['title'] }}</h1>
      </main>
    }
  `,
  styles: `
    .page {
      min-height: 60vh;
      padding: 3rem clamp(1rem, 5vw, 4rem);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaticPage {
  protected readonly route = inject(ActivatedRoute);
}
