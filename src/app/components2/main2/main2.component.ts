import { Component } from '@angular/core';
import { Header2Component } from '../header2/header2.component';
import { ContactComponent } from '../contact/contact.component';
import { Start2Component } from "../start2/start2.component";

import { Mobile2Component } from '../mobile2/mobile2.component';

@Component({
  selector: 'app-main2',
  standalone: true,
  imports: [Header2Component, ContactComponent, Start2Component, Mobile2Component],
  templateUrl: './main2.component.html',
  styleUrl: './main2.component.css'
})
export class Main2Component {

}
