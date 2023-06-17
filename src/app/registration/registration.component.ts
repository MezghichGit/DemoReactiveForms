import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;
  constructor(fb: FormBuilder) {
     this.usernameCtrl = fb.control("",[Validators.required, Validators.minLength(3)]);
     this.passwordCtrl = fb.control("",[Validators.required]);
     this.userForm = fb.group({
        username: this.usernameCtrl,
        password: this.passwordCtrl
    });
  }
  reset(): void {
     this.usernameCtrl.setValue("");
     this.passwordCtrl.setValue("");
  }
  register(): void {
     console.log(this.userForm.value);
  }

}
