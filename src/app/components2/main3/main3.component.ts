import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Header2Component } from '../header2/header2.component';
import { Contact2Component } from '../contact2/contact2.component';
import { PricingComponent } from '../pricing/pricing.component';
import { Mobile2Component } from '../mobile2/mobile2.component';

@Component({
  selector: 'app-main3',
  standalone: true,
  imports: [Header2Component, Contact2Component, PricingComponent, Mobile2Component],
  templateUrl: './main3.component.html',
  styleUrls: ['./main3.component.css']
})
export class Main3Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0); // Scroll to top of the page
    });
  }
}
