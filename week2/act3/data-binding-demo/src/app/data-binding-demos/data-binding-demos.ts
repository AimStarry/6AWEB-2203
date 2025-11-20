import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding-demos',
  imports: [FormsModule],
  templateUrl: './data-binding-demos.html',
  styleUrl: './data-binding-demos.css',
})
export class DataBindingDemos {
  message ='Data Binding Demonstration';
  title = "My First App!";
  description = "This is my new Angular Application";

  imageUrl = 'https://d2zp5xs5cp8zlg.cloudfront.net/image-83814-800.jpg';
  w = 500;
  h = 500;
  altText = 'Cute Kitten';
  textColor= 'blue'
  isHighlighted = true;
  yourName = '';

  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}
