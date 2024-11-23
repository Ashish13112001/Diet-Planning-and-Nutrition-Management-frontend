import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Contact Us Form Submitted:', this.contact);
      alert('Thank you for reaching out! We will get back to you soon.');
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
