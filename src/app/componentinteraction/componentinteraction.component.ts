import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componentinteraction',
  templateUrl: './componentinteraction.component.html',
  styleUrls: ['./componentinteraction.component.css']
})
export class ComponentinteractionComponent implements OnInit {
  parentmsg: any;
  msg: any = ""
  childMsg: any;

  constructor() { }

  ngOnInit() {
  }
  onsubmit() {
    this.msg += "Parent:" + this.parentmsg + "\n"
    this.parentmsg = ""
  }
  childmsg(msg) {
    debugger
    this.childMsg = msg
  }
}
