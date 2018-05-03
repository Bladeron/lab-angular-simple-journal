import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs";

@Injectable()
export class EntryServiceService {

constructor(private http: Http) { }

  getJournal():Observable<object> {
    return this.http.get('http://localhost:3000/api/journal-entries')
      .map((res) => res.json());   
  }

  getSingleEntry(id) {
    return this.http.get(`http://localhost:3000/api/journal-entries/${id}`)
      .map((res) => res.json());   
  }
}
