import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile1',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mobile1.component.html',
  styleUrls: ['./mobile1.component.css']
})
export class Mobile1Component {

  show() {
    const hamburger = document.querySelector('.hamburger') as HTMLElement;
    const testing = document.querySelector('.testing') as HTMLElement;
    const x = document.querySelector('.x') as HTMLElement;

    hamburger.classList.toggle('open'); // Toggle the open class on hamburger
    testing.classList.toggle('active'); // Toggle the active class on testing
    x.classList.toggle('active');
  

  }
}
