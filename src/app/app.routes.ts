import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ContactComponent } from './components2/contact/contact.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'contact', component: ContactComponent }
];
