import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-demo',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-demo.html',
  styleUrl: './template-demo.css',
})
export class TemplateDemo {
  title = 'Template Driven Demo';
  username = '';
  email = '';
  password = '';
  role = '';
  gender = '';      
  isPermanent = false;
  comments = '';
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log('Form Data:', {
      username: this.username,
      gender: this.gender,
      status: this.isPermanent ? 'Permanent' : 'Probationary',
      comments: this.comments
    });
  }
}
