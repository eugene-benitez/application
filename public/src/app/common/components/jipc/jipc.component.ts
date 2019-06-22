import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-jipc',
  templateUrl: './jipc.component.html',
  styleUrls: ['./jipc.component.css']
})
export class JIPCComponent implements OnInit {

  Base64String: any;
  apiResponse: any;
  constructor(
    private router: Router,
    private http: HttpService
  ) { }

  ngOnInit() {

    this.http.getData().subscribe((data: any) => {
      this.Base64String = atob(data);
    });

    console.log(this.apiResponse);
  }

  apiSubmit() {
    this.http.apiSubmit(this.Base64String)
      .subscribe((data: any) => {
        this.apiResponse = data;
        console.log(this.apiResponse);
      })
  }
}
