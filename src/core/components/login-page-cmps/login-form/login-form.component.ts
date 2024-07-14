import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, RouterModule, RouterLink],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  createNewAccount: boolean = false;

  toggleCreateNewAccount() {
    this.createNewAccount = !this.createNewAccount;
  }
}
