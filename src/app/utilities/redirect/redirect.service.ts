import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {

  constructor(private router: Router) { }

  redirectToLogin(): void {
    void this.router.navigate(['/login']);
  }

  redirectToNotAuthorized(): void {
    void this.router.navigate(['/not-authorized']);
  }
}
