import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  closeResult = '';
  constructor() { }

  ngOnInit(): void {
  }

}
