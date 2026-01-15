import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, KeyValuePipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-pipes-demo',
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, AsyncPipe, CurrencyPipe, SlicePipe, DecimalPipe, JsonPipe, PercentPipe, KeyValuePipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo implements OnInit {
  presentDate = new Date();

 time$: Observable<Date> = interval(1000).pipe(
    map(() => new Date())
  );

  price : number = 20000;

  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];

  decimalNum1: number = 8.7589623;
  decimalNum2: number =5.43;

  jsonData = { id: 101, name: 'Angular Demo', status: 'Active', tags: ['web', 'frontend'] };
  statsRatio: number = 0.854;
  studentInfo = { Enrolled: true, FullyPaid: false, SOC: true };

  ngOnInit(): void{

  }


}


