import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-demo',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-demo.html',
  styleUrl: './reactive-demo.css',
})
export class ReactiveDemo {

  userForm: FormGroup;
submitted = false;

constructor(private fb: FormBuilder) {
  this.userForm = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    role: ['', Validators.required],
    gender: ['', Validators.required],
    status: ['', Validators.required],
    comments: ['']
  });
}

onSubmit() {
this.submitted = true;
if (this.userForm.valid) {
console.log('Reactive Form Data:', this.userForm.value);
  } else {
  this.userForm.markAllAsTouched();
  }
}
isInvalid(controlName: string): boolean {
  const control = this.userForm.get(controlName);
  return !!(control && control.invalid && (control.touched || this.submitted));
  }
}
