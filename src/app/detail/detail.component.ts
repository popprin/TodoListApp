import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Router, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  currentUrl: string;

  lists$: Object;

  constructor(private data: DataService, private router : Router) { 
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  }

  ngOnInit() {
    this.data.getList().subscribe(
      data => this.lists$ = data 
    );
  }
  
  deleteList(id){
    this.data.deleteList(id);
  }
}
