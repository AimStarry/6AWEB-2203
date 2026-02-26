import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatSelectModule,
    MatDividerModule,
    MatCardModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  userName = '';
  email = '';
  password = '';
  gender = '';
  birthDate!: Date;
  address = '';
  angularSkillLevel = 5;
  notification = '';
  submitted = false;
  minSkillLevel = 1;
  maxSkillLevel = 10;

  notifications = [
    { value: 'email', viewValue: 'Email' },
    { value: 'sms', viewValue: 'SMS' },
    { value: 'push', viewValue: 'Push Notification' }
  ];

  formdata: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender: new FormControl('', [Validators.required]),
    birthDate: new FormControl(null, [Validators.required]),
    address: new FormControl(''),
    angularSkillLevel: new FormControl(5),
    notification: new FormControl('', [Validators.required]),
    agree: new FormControl(false, [Validators.requiredTrue])
  });

  onClickSubmit(data: any) {
    if (this.formdata.valid) {
      this.submitted = true;
      this.userName = data.userName;
      this.email = data.email;
      this.password = data.password;
      this.gender = data.gender;
      this.birthDate = data.birthDate;
      this.address = data.address;
      this.angularSkillLevel = data.angularSkillLevel;
      this.notification = data.notification;
      console.log('Form Submitted successfully', data);
    }
  }
}
