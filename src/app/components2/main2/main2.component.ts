import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


import { Header2Component } from '../header2/header2.component';
import { ContactComponent } from '../contact/contact.component';
import { Start2Component } from '../start2/start2.component';
import { Mobile2Component } from '../mobile2/mobile2.component';

@Component({
  selector: 'app-main2',
  standalone: true,
  imports: [Header2Component, ContactComponent, Start2Component, Mobile2Component],
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.css'] // Fixed typo from styleUrl to styleUrls
})
export class Main2Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0); // Scroll to top of the page
    });
  }
}
