import { Component,AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
  
  
})
export class HeaderComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const header = document.querySelector('.header') as HTMLElement; // Explicitly cast header as HTMLElement

    if (header) {
        const stickyClass: string = 'sticky'; // Explicitly declare the type as string

        window.addEventListener('scroll', () => {
            console.log("Scroll position:", window.scrollY);
            if (window.scrollY > header.offsetHeight) {
                header.classList.add(stickyClass);
                console.log("Sticky class added");
            } else {
                header.classList.remove(stickyClass);
                console.log("Sticky class removed");
            }
        });
    }
  }
}
