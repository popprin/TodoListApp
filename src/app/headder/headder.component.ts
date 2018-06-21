import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router'

@Component({
  selector: 'app-headder',
  templateUrl: './headder.component.html',
  styleUrls: ['./headder.component.css']
})
export class HeadderComponent implements OnInit {

  currentUrl: string;

  constructor(private router : Router) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
   }

  ngOnInit() {
  }

}
