import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


@Component({
  selector: 'app-examples',
  standalone: true,
  imports: [],
  templateUrl: './examples.component.html',
  styleUrls: ['./swiper.css','./examples.component.css']
})
export class ExamplesComponent implements OnInit {

  ngOnInit() {
    const swiper = new Swiper('.swiper1', {  // Reference the correct class name
      // Optional parameters
      loop: true,

      // If we need pagination
      pagination: {
        
        el: '.swiper-pagination',
      
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

    
  }
  

  
}
