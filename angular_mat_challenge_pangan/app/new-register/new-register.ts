import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

// Material Imports
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-new-register',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, MatButtonModule, MatInputModule,
    MatFormFieldModule, MatDatepickerModule, MatNativeDateModule,
    MatRadioModule, MatSliderModule, MatCheckboxModule, MatSlideToggleModule,
    MatStepperModule, MatChipsModule, MatExpansionModule, MatIconModule,
    MatToolbarModule, MatCardModule
  ],
  templateUrl: './new-register.html',
  styleUrl: './new-register.css'
})
export class NewRegister {
  isDarkMode = false;
  submitted = false;
  interests: string[] = ['AI & Robotics', 'Cybersecurity', 'Cloud Systems', 'Fullstack'];

  formdata = new FormGroup({
    accountInfo: new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^[a-zA-Z][a-zA-Z0-9]*$/)
      ]),
    }),
    personalInfo: new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      birthDate: new FormControl<Date | null>(null, [Validators.required, this.yearValidator]),
      gender: new FormControl('', [Validators.required]),
    }),
    additionalInfo: new FormGroup({
      address: new FormControl(''),
      skillLevel: new FormControl(5),
      agree: new FormControl(false, [Validators.requiredTrue])
    })
  });

  yearValidator(control: AbstractControl): ValidationErrors | null {
    const dateValue = control.value;
    if (dateValue && new Date(dateValue).getFullYear() > 2006) {
      return { tooYoung: true };
    }
    return null;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  onSubmit() {
    if (this.formdata.valid) {
      this.submitted = true;
    }
  }
}
