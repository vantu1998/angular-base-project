import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'public-layout',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicLayoutComponent {
}
