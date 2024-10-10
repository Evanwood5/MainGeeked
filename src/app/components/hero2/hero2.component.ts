import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // allows for ng class in html
@Component({
  selector: 'app-hero2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero2.component.html',
  styleUrls: ['./hero2.component.css'] // Ensure the path is correct
})
export class Hero2Component {
  activeContent: number | null = null; // Use activeContent here

  toggleContent(contentId: number): void {
    if (this.activeContent === contentId) {
      this.activeContent = null;
    } else {
      this.activeContent = contentId;
    }
  }
}
