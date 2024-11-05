import { Component,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header2',
  standalone: true,
  imports: [],
  templateUrl: './header2.component.html',
  styleUrl: './header2.component.css'
})
export class Header2Component implements AfterViewInit {

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