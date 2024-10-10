import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile2',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mobile2.component.html',
  styleUrl: './mobile2.component.css'
})
export class Mobile2Component {
  show() {
    const hamburger = document.querySelector('.hamburger') as HTMLElement;
    const testing = document.querySelector('.testing') as HTMLElement;
    const x = document.querySelector('.x') as HTMLElement;

    hamburger.classList.toggle('open'); // Toggle the open class on hamburger
    testing.classList.toggle('active'); // Toggle the active class on testing
    x.classList.toggle('active');
  

  }
}
