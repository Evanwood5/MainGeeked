import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

import { Main2Component } from './components2/main2/main2.component';
import { Main3Component } from './components2/main3/main3.component';

export const routes: Routes = [

  { path: '', component: MainComponent },


  { path: 'contact', component: Main2Component },

  { path: 'Main3', component: Main3Component},


];
