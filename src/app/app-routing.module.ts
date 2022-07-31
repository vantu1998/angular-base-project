import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticatedGuard, PermissionGuard} from "./guards";
import {AuthLayoutComponent, PublicLayoutComponent} from "./layouts";
import {PermissionNames} from "./permissions";
import {Privilege} from "./permissions/enums/privilege.enum";


export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    canActivate: [AuthenticatedGuard],
    component: AuthLayoutComponent,
    children: [
      {
        path: 'dashboard',
        canLoad: [PermissionGuard],
        data: {
          permission: [PermissionNames.DashboardManage, Privilege.Read],
        },
        loadChildren: () =>
          import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
    ],
  },
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/security').then((m) => m.SecurityModule),
      },
      {
        path: 'not-authorized',
        loadChildren: () =>
          import('./features/not-authorized').then(
            (m) => m.NotAuthorizedModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
