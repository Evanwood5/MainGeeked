import { Component } from '@angular/core';
import { Header2Component } from '../header2/header2.component';
import { Contact2Component } from '../contact2/contact2.component';
import { PricingComponent } from "../pricing/pricing.component";
import { Mobile2Component } from '../mobile2/mobile2.component';



@Component({
  selector: 'app-main3',
  standalone: true,
  imports: [Header2Component, Contact2Component, PricingComponent,Mobile2Component],
  templateUrl: './main3.component.html',
  styleUrl: './main3.component.css'
})
export class Main3Component {

}
