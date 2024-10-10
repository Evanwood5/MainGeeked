import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  isButton1Active: boolean = true; // Track which button is active

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Subscribe to router events to set active button based on the route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isButton1Active = this.router.url.includes('Main3');
      }
    });
  }

  navigateToMain3(): void {
    this.router.navigate(['/Main3']); // Navigate to Main3
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']); // Navigate to Contact
  }

}
