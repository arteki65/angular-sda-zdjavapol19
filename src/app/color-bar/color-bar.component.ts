import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-bar',
  templateUrl: './color-bar.component.html',
  styleUrls: ['./color-bar.component.css'],
})
export class ColorBarComponent implements OnInit {
  @Input() color: string = '';

  constructor() {}

  ngOnInit(): void {}
}
