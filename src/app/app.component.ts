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
  linkUrl2 = 'https://youtube.com';
  cActive = true;
  text = '';
  showTrainingSection = true;
  btnTextColor = 'black';
  pActive = true;

  colors: string[] = ['red', 'green', 'blue', 'grey', 'yellow', 'purple'];

  private interval: any | null = null;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.cActive = !this.cActive;
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.interval != null) {
      clearInterval(this.interval);
    }
  }

  clickHandler() {
    this.showTrainingSection = !this.showTrainingSection;
    this.pActive = !this.pActive;
  }

  onMouseMove() {
    console.log('te mouse was moved');
  }

  onColorClicked(color: string) {
    this.btnTextColor = color;
  }
}
