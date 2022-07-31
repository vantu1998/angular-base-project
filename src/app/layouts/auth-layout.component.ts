import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'auth-layout',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLayoutComponent {
}
