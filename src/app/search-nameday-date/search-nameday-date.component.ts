import { NamedaysApiService } from './../services/namedays-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-nameday-date',
  templateUrl: './search-nameday-date.component.html',
  styleUrls: ['./search-nameday-date.component.css'],
})
export class SearchNamedayDateComponent implements OnInit {
  constructor(private api: NamedaysApiService) {}

  ngOnInit(): void {
    this.api
      .searchByName('Arkadiusz')
      .subscribe((results) => console.log(results));
  }
}
