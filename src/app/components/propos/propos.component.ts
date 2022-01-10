import { Component, OnInit } from '@angular/core';
//import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-propos',
  templateUrl: './propos.component.html',
  styleUrls: ['./propos.component.css']
})
export class ProposComponent implements OnInit {
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  closeResult = '';

  //constructor(private modalService: NgbModal) { }
  constructor() { }
  
  ngOnInit(): void {

  }
}
