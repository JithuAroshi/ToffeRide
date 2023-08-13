import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  eyeSwitch1 = false;
  eyeSwitch2 = false;
  Isdot1 = true;
  Isdot2 = false;
  Isdot3 = false;
  passwordType = 'password';
  confirmPasswordType = 'password';

  showPassword() {
    this.eyeSwitch1 = !this.eyeSwitch1;

    if (this.eyeSwitch1) {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }

  showConfirmPassword() {
    this.eyeSwitch2 = !this.eyeSwitch2;

    if (this.eyeSwitch2) {
      this.confirmPasswordType = 'text';
    } else {
      this.confirmPasswordType = 'password';
    }
  }

  dot1() {
    this.Isdot1 = true;
    this.Isdot2 = false;
    this.Isdot3 = false;
  }
  dot2() {
    this.Isdot1 = false;
    this.Isdot2 = true;
    this.Isdot3 = false;
  }
  dot3() {
    this.Isdot1 = false;
    this.Isdot2 = false;
    this.Isdot3 = true;
  }
}
