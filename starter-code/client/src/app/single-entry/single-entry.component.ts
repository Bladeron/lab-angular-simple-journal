import { Component, OnInit } from '@angular/core';
import  { ActivatedRoute, Router} from '@angular/router';
import { EntryServiceService } from '../entry-service.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers: [EntryServiceService]
})

export class SingleEntryComponent implements OnInit {

  singlePost: any;

  constructor(route: ActivatedRoute, public entry: EntryServiceService) { 
    route.params.subscribe(params => {
      entry.getSingleEntry(params.id).subscribe(post => {
        console.log("post")
        this.singlePost = post;
        console.log(this.singlePost)
      })
    })
  }

  ngOnInit() {
  }

}
