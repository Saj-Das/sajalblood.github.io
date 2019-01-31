import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  templateUrl: './childcomp.component.html',
  styleUrls: ['./childcomp.component.css']
})
export class ChildcompComponent implements OnInit {
  @Input() parentmsg: any
  childmsg: any;
  msg: any = ""
  @Output() childMsgOutput= new EventEmitter

  constructor() { }

  ngOnInit() {
  }
  onsubmit() {
    this.msg += "Childs:" + this.childmsg + "\n"
    this.childmsg = ""
    this.childMsgOutput.emit( this.msg)
  }
}
