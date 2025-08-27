// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-icon',
//   imports: [],
//   templateUrl: './icon.html',
//   styleUrl: './icon.css'
// })
// export class Icon {

// }


import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      [attr.stroke-width]="1.5"
      [attr.stroke]="strokeColor"
      [attr.class]="className">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  `,
  styles: [``]
})
export class IconComponent {
  @Input() className: string = '';
  @Input() strokeColor: string = 'currentColor';
}
