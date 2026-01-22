import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee';
import { Products } from './products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-services-demo');

//   public employees = [{
//     id: 101,
//     firstname: 'Aimee',
//     lastname: 'Pangan',
//     email: 'aspangan1@student.hau.edu.ph',
//   },
//   {
//     id: 102,
//     firstname: 'James',
//     lastname: 'Atienza',
//     email: 'jatienza@student.hau.edu.ph',
//   },
//   {
//     id: 103,
//     firstname: 'John',
//     lastname: 'Cena',
//     email: 'jcena@student.hau.edu.ph',
//   },
//   {
//     id: 103,
//     firstname: 'Robert',
//     lastname: 'Quintana',
//     email: 'rquintana@student.hau.edu.ph',
//   },
// ]

  public employees: {
    id:number,
    firstname: string,
    lastname: string,
    email: string,
  }[] = [];


  public products: {
    productid:string,
    productname: string,
    description: string,
    price: number,
  }[] = [];
constructor(
    private _employeeService: Employee,
    private _productService: Products
  ) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.products = this._productService.getProducts();
  }

}
