import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { Hero2Component } from './components/hero2/hero2.component';
import { ExamplesComponent } from './components/examples/examples.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { MediaComponent } from './components/media/media.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components2/contact/contact.component';
import { Header2Component } from './components2/header2/header2.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,

    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
    HeroComponent,
    Hero2Component,
    ExamplesComponent,
    QuestionsComponent,
    MediaComponent,
    FooterComponent,
    ContactComponent,
    Header2Component,
    
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'geeked1';
}
