import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NavigationComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {}
