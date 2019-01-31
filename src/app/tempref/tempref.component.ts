import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempref',
  templateUrl: './tempref.component.html',
  styleUrls: ['./tempref.component.css']
})
export class TemprefComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  log(element)
  {
    console.log(element)
    console.log(element.value)
  }
}
