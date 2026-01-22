import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Employee {
  getEmployees() {
      return[{
        id: 101,
        firstname: 'Aimee',
        lastname: 'Pangan',
        email: 'aspangan1@student.hau.edu.ph',
      },
      {
        id: 102,
        firstname: 'James',
        lastname: 'Atienza',
        email: 'jatienza@student.hau.edu.ph',
      },
      {
        id: 103,
        firstname: 'John',
        lastname: 'Cena',
        email: 'jcena@student.hau.edu.ph',
      },
      {
        id: 103,
        firstname: 'Robert',
        lastname: 'Quintana',
        email: 'rquintana@student.hau.edu.ph',
      },
    ];
  }
}
