import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './custom-form.html',
  styleUrls: ['./custom-form.css']
})
export class CustomForm implements OnInit {
  projectForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      projectName: ['', [Validators.required, Validators.minLength(5)]],
      clientEmail: ['', [Validators.required, Validators.email]],
      projectType: ['development', Validators.required],
      description: ['', [Validators.maxLength(200)]],
      agreeTerms: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    if (this.projectForm.valid) {
      console.log('Form Data:', this.projectForm.value);
      alert('Project Submitted Successfully!');
      this.projectForm.reset({ projectType: 'development' });
    }
  }
}
