import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yesterday-namedays',
  templateUrl: './yesterday-namedays.component.html',
  styleUrls: ['./yesterday-namedays.component.css'],
})
export class YesterdayNamedaysComponent implements OnInit {
  // inject NamedaysApiService
  constructor() {}

  // call funciton from api which is reponsible for yesterdays namedays
  // assign it to field and show field value on html site
  ngOnInit(): void {}
}
