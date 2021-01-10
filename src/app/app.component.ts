import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'sda APP!!!';
  imgSrc = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  linkUrl = 'https://google.com';
  headerTextColor: 'yellow' | 'blue' = 'yellow';

  // TODO:
  // introduce new field with proper visibility witch can hold values 'red' and 'black'
  // this value should change every 1000 ms
  // this value should be responsible for background color of header

  ngOnInit(): void {
    setInterval(() => {
      if (this.headerTextColor === 'yellow') {
        this.headerTextColor = 'blue';
      } else {
        this.headerTextColor = 'yellow';
      }
    }, 1000);
  }

  clickHandler() {
    console.log('button was clicked');
  }

  onMouseMove() {
    console.log('te mouse was moved');
  }
}
