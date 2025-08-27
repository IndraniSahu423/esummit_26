import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EvervaultCardDemo } from './evervault-card-demo/evervault-card-demo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,EvervaultCardDemo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('esummit_26');
}
