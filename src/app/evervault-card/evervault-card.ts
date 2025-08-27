import { CommonModule } from '@angular/common';

import {
  Component,
  Input,
  HostListener,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-evervault-card',
  imports: [CommonModule , EvervaultCard],
  templateUrl: './evervault-card.html',
  styleUrl: './evervault-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})



export class EvervaultCard implements OnInit {
  @Input() text: string = '';
  @Input() className: string = '';
  @Input() label: string = ''; // Label below circle
  @Input() value: string = ''; // Value below label (e.g. "50K+")
  @Input() imageUrl: string = '';   // Background circular image
  

   cards = [
    {
      text: 'Hover',
      label: 'Attendee Count:',
      value: '50K+',
      imageUrl: 'https://www.ecell.in/seedstars/assets/start.png'
    },
    {
      text: 'Hover',
      label: 'Venue',
      value: 'IIT Bombay',
      imageUrl: 'https://www.ecell.in/seedstars/assets/venue.png'
    },
    {
      text: 'Hover',
      label: 'Professions Count:',
      value: '300+',
      imageUrl: 'https://www.ecell.in/seedstars/assets/invest.png'
    }
  ];   
  mouseX: number = 0;
  mouseY: number = 0;
  randomString: string = '';

  private characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  ngOnInit(): void {
    this.randomString = this.generateRandomString(1500);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();

    this.mouseX = event.clientX - rect.left;
    this.mouseY = event.clientY - rect.top;

    this.randomString = this.generateRandomString(1500);
  }

  generateRandomString(length: number): string {
    let result = '';
    for (let i = 0; i < length; i++) {
      result +=
        this.characters.charAt(Math.floor(Math.random() * this.characters.length));
    }
    return result;
  }

  get maskStyle() {
    const mask = `radial-gradient(250px at ${this.mouseX}px ${this.mouseY}px, white, transparent)`;
    return {
      '-webkit-mask-image': mask,
      'mask-image': mask,
    };
  }
}
