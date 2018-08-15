import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators'
import {MyModel} from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private API_BASE_URL = 'https://api.icndb.com';

  constructor(private httpClient: HttpClient) { }

  getItems(): Observable<MyModel[]> {
    return this.httpClient
      .get<MyModel>(`${this.API_BASE_URL}/all`)
      .pipe(map(result => result.value));
  }
}
