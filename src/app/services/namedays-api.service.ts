import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NamedaysApiService {
  private readonly url =
    'https://api.abalin.net/today?country=pl&timezone=Europe/Prague';

  constructor(private http: HttpClient) {}

  fetchTodayNamedays(): Observable<string> {
    return this.http
      .get<Namedays>(this.url)
      .pipe(map((namedays) => namedays.data.namedays.pl));
  }

  testHttpClient() {
    this.http
      .get<Namedays>(this.url, {
        observe: 'events',
        reportProgress: true,
      })
      .subscribe((response) => console.log('httpClientTest', response));
  }
}
