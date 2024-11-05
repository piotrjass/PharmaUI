import { Component, Input } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RouterModule, RouterLink, Router } from '@angular/router';
//
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ToastrService } from 'ngx-toastr';
//
@Component({
  selector: 'app-main-menu-card',
  standalone: true,
  imports: [NgIconComponent, RouterModule, RouterLink],
  templateUrl: './main-menu-card.component.html',
  styleUrl: './main-menu-card.component.css',
  viewProviders: [
    provideIcons({}),
    provideAnimations(), // required animations providers
  ], // Toastr providers],
})
export class MainMenuCardComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() isActive: boolean = false;
  @Input() route: string = '';

  constructor(
    private router: Router,
    private toast: ToastrService,
  ) {}

  onClick() {
    if (this.isActive) {
      this.router.navigate([this.route]);
    } else {
      this.toast.warning('Ta sekcja nie jest aktywna!', 'Uwaga!');
    }
  }
}
