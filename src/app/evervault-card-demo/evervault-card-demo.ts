import { Component } from '@angular/core';
import { EvervaultCard } from '../evervault-card/evervault-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evervault-card-demo',
  imports: [ CommonModule ,EvervaultCard],
  templateUrl: './evervault-card-demo.html',
  styleUrl: './evervault-card-demo.css'
})
export class EvervaultCardDemo {

  cards = [
    {
      text: 'Hover',
      label: 'Attendee Count',
      value: '50K+',
      imageUrl: 'https://www.ecell.in/seedstars/assets/start.png'
    },
    {
      text: 'Hover',
      label: 'Venue',
      value: 'IIT Bombay',
      imageUrl: 'https://www.ecell.in/seedstars/assets/start.png'
    },
    {
      text: 'Hover',
      label: 'Professions Count',
      value: '300+',
      imageUrl: 'https://www.ecell.in/seedstars/assets/invest.png'
    }
  ];
}
