import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  people: any;
  constructor(private http: Http) { }

  ngOnInit() {
  }
  findAstronauts() {
    console.log('bruhh');
    this.http.get('http://api.open-notify.org/astros.json').toPromise().then(
      (response) => {
        console.log(response);
        console.log(response.json());
        this.people = response.json().people;
      }
    );

  }
}
