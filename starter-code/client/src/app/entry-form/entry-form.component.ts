import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { EntryServiceService } from '../entry-service.service';


@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css'],

})
export class EntryFormComponent implements OnInit {

  title: string;
  content: string;

  constructor(private http: Http, public service: EntryServiceService) { }

  ngOnInit() {
  }

  saveComment() {
    this.service.newPost(this.title, this.content).subscribe(res => console.log(res))
  }
  
}
