import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  User:any = [];
  newArray: any;
  content: any;
  constructor(private apiService: ApiService) { 
    this.readUser();
  }
  ngOnInit() {}
  searchThis(data) {
    this.content = this.newArray
    console.log(data)
    if (data) {
      this.content = this.content.filter(function (ele, i, array) {
        let arrayelement = ele.name.toLowerCase()
        return arrayelement.includes(data)
      })
    }
    else {
      console.log(this.content)
    }
    console.log(this.content)
  }

  readUser(){
    this.apiService.getUsers().subscribe((data) => {
     this.User = data;
    })    
  }
  removeUser(employee, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteUser(employee._id).subscribe((data) => {
          this.User.splice(index, 1);
        }
      )    
    }
  }
}