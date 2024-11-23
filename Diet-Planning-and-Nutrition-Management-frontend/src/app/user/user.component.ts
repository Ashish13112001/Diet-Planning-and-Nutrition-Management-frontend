import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user = {
    first_name: '',
    last_name: '',
    age: null,
    weight: null,
    height: null,
    gender: ''
  };

  onSubmit(form: any): void {
    if (form.valid) {
      console.log('User Form Submitted:', this.user);
      alert('Form submitted successfully!');
    } else {
      alert('Please fill out the form correctly.');
    }
  }

}
