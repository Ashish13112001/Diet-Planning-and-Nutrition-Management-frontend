import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user = {
    username: '',
    email: '',
    password: ''
  };

  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Signup Successful:', this.user);
      alert('Signup Successful!');
    } else {
      alert('Please fill out the form correctly.');
    }
  }

}
