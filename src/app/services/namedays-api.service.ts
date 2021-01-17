import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NamedaysApiService {
  private readonly todaysNamedaysUrl =
    'https://api.abalin.net/today?country=pl&timezone=Europe/Prague';
  private readonly yesterdaysNamedaysUrl =
    'https://api.abalin.net/yesterday?country=pl&timezone=Europe/Prague';
  private readonly searchByDateUrl =
    'https://api.abalin.net/namedays?country=pl&';

  constructor(private http: HttpClient) {}

  fetchTodayNamedays(): Observable<string> {
    return this.http
      .get<Namedays>(this.todaysNamedaysUrl)
      .pipe(map((namedays) => namedays.data.namedays.pl));
  }

  fetchYesterdaysNamedays(): Observable<string> {
    return this.http
      .get<Namedays>(this.yesterdaysNamedaysUrl)
      .pipe(map((namedays) => namedays.data.namedays.pl));
  }

  searchByDate(month: string, day: string): Observable<string> {
    return this.http
      .get<Namedays>(`${this.searchByDateUrl}month=${month}&day=${day}`)
      .pipe(map((namedays) => namedays.data.namedays.pl));
  }
}
