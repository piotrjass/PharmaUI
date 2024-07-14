import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterLink, Router } from '@angular/router';
@Component({
  selector: 'app-hello-page',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './hello-page.component.html',
  styleUrl: './hello-page.component.css',
})
export class HelloPageComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/main-menu']);
    }, 2000);
  }
}
