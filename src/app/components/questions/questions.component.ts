import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {

  activeSection: string = 'planning';

  showSection(section: string) {
    this.activeSection = section;
  }

  toggleContent(event: MouseEvent): void {
    const button = event.currentTarget as HTMLElement;
    const container = button.closest('.question__context');
    if (container) {
      const content = container.querySelector('p') as HTMLElement;
      const icon = button.querySelector('i') as HTMLElement;

      if (content && icon) {
        const isOpen = content.classList.contains('open');
        content.classList.toggle('open');
        this.changeIcon(icon, !isOpen); // Pass `!isOpen` to rotate based on the state
      } else {
        console.error('No <p> element or icon found within the container!');
      }
    } else {
      console.error('No container element found!');
    }
  }

  changeIcon(icon: HTMLElement, open: boolean): void {
    // Determine rotation based on state
    icon.classList.add('rotate');
    if (open) {
      icon.classList.remove('reverse');
    } else {
      icon.classList.add('reverse');
    }

    // Toggle icon class between plus and minus
    icon.classList.toggle('fa-plus', !open);
    icon.classList.toggle('fa-minus', open);

    // Remove the rotate class after animation ends to allow re-animation
    setTimeout(() => {
      icon.classList.remove('rotate', 'reverse');
    }, 400); // 400ms matches the duration of your animation
  }

  handleButtonClick(event: MouseEvent): void {
    this.toggleContent(event);
  }
}
