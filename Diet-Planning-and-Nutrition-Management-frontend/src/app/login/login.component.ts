import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };
  constructor(private router: Router){}

  onSubmit(form: any): void {
    if (form.valid) {
      // this.sharedServices.setUserDats(this.loginData);
      this.router.navigate(['/user'])
      this.router.navigate(['/dietician'])
      alert('Login Successful!');
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
