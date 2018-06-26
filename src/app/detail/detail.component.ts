import { Component, OnInit, TemplateRef } from '@angular/core';
import { DataService } from '../data.service'
import { Router, NavigationEnd } from '@angular/router'

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  currentUrl: string;

  lists$: Object;

  modalRef: BsModalRef;

  constructor(private data: DataService, private router : Router, private modalService: BsModalService) { 
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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
}
}
