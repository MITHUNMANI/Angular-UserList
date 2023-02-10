import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Output() searchcriteria = new EventEmitter<String>();
  searchvalue: String;
  searchThis() {
      this.searchcriteria.emit(this.searchvalue)
  }
  constructor(){

  }

  ngOnInit() {
  }
  
}


