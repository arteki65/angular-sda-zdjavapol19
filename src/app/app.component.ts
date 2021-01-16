import { NamedaysApiService } from './services/namedays-api.service';
import { ColorsService } from './services/colors.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import './dto/namedays.dto';

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
  namedays = '';

  private interval: any | null = null;

  constructor(
    public colorsService: ColorsService,
    private api: NamedaysApiService
  ) {}

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

    this.api.fetchTodayNamedays().subscribe(
      (todayNamedays) => {
        this.namedays = todayNamedays;
      },
      (error) => alert('Something went wrong. Try again later.')
    );
    this.api.testHttpClient();
  }

  onMouseMove() {
    console.log('te mouse was moved');
  }

  onColorClicked(color: string) {
    this.btnTextColor = color;
  }
}
