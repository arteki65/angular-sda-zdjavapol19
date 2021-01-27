import { NamedaysApiService } from './../services/namedays-api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UiService } from '../services/ui.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-search-nameday-date',
  templateUrl:'./search-nameday-date.component.html',
  styleUrls: ['./search-nameday-date.component.css'],
})
export class SearchNamedayDateComponent implements OnInit, OnDestroy {
  name: string = '';
  showContent = true;
  date:any='';
  dates:any = '';
  month = '';
  day ='';
  showValue:any ='';
  
  
  
  

  private subscription: Subscription | null = null;
  
  
  
  constructor(private api: NamedaysApiService, private uiService: UiService) {}
  
  ngOnDestroy(): void {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.api
      .searchByName(this.name)
      .subscribe((results) => console.log(results));
  }

  onSearch() {
    /* to jeden pomysł jaki przyszedł mi do gowy ale niestety nie pokazuje rezultatu */
    
    /*if (this.name === '') {
      return;
    }
    this.uiService.isLoading.next(true);
    this.api.searchByName(this.name).subscribe((result) => { 
      
    let obj = {result};
    const showValue = Object.getOwnPropertyNames(obj).forEach(key => {
    let variable = [key]}); 
    this.uiService.isLoading.next(false);
      */
     
    /*następny pomysł, który pokazuje ile znaleziono odpowiedzi na zapytanie (ale nie o to nam chodzi ):*/
    /*
    onSearch() {
    if (this.name === '') {
      return;
    }
    this.uiService.isLoading.next(true);
    this.api.searchByName(this.name).subscribe((getdate) => { 
    const showValue = console.log(getdate.date.length);
    this.uiService.isLoading.next(false);
     */

     /*kolejny pomysł jest następujący i najbardziej rozsądny ale równie nici */

     /*
     if (this.name === '') {
      return;
    }
    this.uiService.isLoading.next(true);
    this.api.searchByName(this.name).subscribe((getdate) => { 
    const showValue = console.log(getdate.date.map(x=>(x.day,x.month)));
    this.uiService.isLoading.next(false);
     */
    
    /*
    if (this.name === '') {
      return;
    }
    this.uiService.isLoading.next(true);
    this.api.searchByName(this.name).subscribe((result) => { 
    const showValue = result.dates.filter(result=>(result.day,result.month))
    this.uiService.isLoading.next(false);
     }) });
     */
    
  }
}
