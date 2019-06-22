import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {
  }

  getData = () => this._http.get('https://api.johnspizza.com/v1/Employment/Programmers/Assignment/');

  apiSubmit = (data) => this._http.post('https://api.johnspizza.com/v1/Employment/Programmers/Assignment?lastName=Benitez', data)
    ;
}

