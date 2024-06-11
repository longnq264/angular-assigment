import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private auth: AuthService, private router: Router) {}
  onSubmit(data: any) {
    this.auth.register(data).subscribe(
      (res) => {
        alert('Success!');
        this.router.navigate(['login']);
      },
      (error) => {
        alert(error.error);
      }
    );
  }
}
