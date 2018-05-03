import { Component, OnInit } from '@angular/core';
import { EntryServiceService } from '../entry-service.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [EntryServiceService]
})

export class EntryListComponent implements OnInit {

  post$: Observable<object>;

  constructor(private entrada: EntryServiceService) { }
  
  ngOnInit() {
    this.post$ = this.entrada.getJournal()
  }

}
