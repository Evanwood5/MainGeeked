import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { Hero2Component } from '../hero2/hero2.component';
import { ExamplesComponent } from '../examples/examples.component';
import { QuestionsComponent } from '../questions/questions.component';
import { MediaComponent } from '../media/media.component';
import { FooterComponent } from '../footer/footer.component';
import { Mobile1Component } from "../mobile1/mobile1.component";


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    Hero2Component,
    ExamplesComponent,
    QuestionsComponent,
    MediaComponent,
    FooterComponent,
    Mobile1Component
],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {}
