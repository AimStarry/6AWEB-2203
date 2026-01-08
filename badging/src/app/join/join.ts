import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-join',
  imports: [FormsModule, CommonModule],
  templateUrl: './join.html',
  styleUrl: './join.css',
})
export class Join {
  userRegistration = {
    fullName: '',
    email: '',
    interest: 'Technical',
    message: ''
  };

  isSubmitted = false;

  onSubmit() {
    console.log('Form Submitted!', this.userRegistration);
    this.isSubmitted = true;

    setTimeout(() => {
      this.isSubmitted = false;
      this.userRegistration = { fullName: '', email: '', interest: 'Technical', message: '' };
    }, 5000);
  }
}
