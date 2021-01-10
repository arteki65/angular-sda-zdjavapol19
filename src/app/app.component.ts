import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'sda APP!!!';
  imgSrc = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  linkUrl = 'https://google.com';
  headerTextColor: 'yellow' | 'blue' = 'yellow';
  backgroundColor: 'red' | 'black' = 'red';

  private interval: any | null = null;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      if (this.headerTextColor === 'yellow' && this.backgroundColor === 'red') {
        this.headerTextColor = 'blue';
        this.backgroundColor = 'black';
      } else {
        this.headerTextColor = 'yellow';
        this.backgroundColor = 'red';
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.interval != null) {
      clearInterval(this.interval);
    }
  }

  clickHandler() {
    console.log('button was clicked');
  }

  onMouseMove() {
    console.log('te mouse was moved');
  }
}
