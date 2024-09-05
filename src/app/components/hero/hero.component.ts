import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero', 
  standalone: true,
  imports: [RouterLink],  // Import RouterLink if you need it for navigation within this component
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  // Component logic here
}
