import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  IsShake = false;
  IsShake2 = true;

  shake() {
    this.IsShake = !this.IsShake;
  }

  shake2() {
    this.IsShake2 = !this.IsShake2;
  }
}
