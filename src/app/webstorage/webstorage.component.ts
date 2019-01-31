import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-webstorage',
  templateUrl: './webstorage.component.html',
  styleUrls: ['./webstorage.component.css']
})
export class WebstorageComponent implements OnInit {
person:any
  constructor() { }

  ngOnInit() {
    //local storage
    localStorage.setItem("name","Adam")
    var person={name:"Adam",rollno:"7"}
    localStorage.setItem("person",JSON.stringify( person));
    //session storage
    sessionStorage.setItem("name","Adam")
    var person={name:"Adam",rollno:"7"}
    sessionStorage.setItem("person",JSON.stringify( person));
    var personDetails=localStorage.getItem("person");

   this.person= JSON.parse(personDetails)
  }

}
