import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
 Birthday=new Date()
 name="Adam"
 price=500
  constructor() { }

  ngOnInit() {
  }

}
