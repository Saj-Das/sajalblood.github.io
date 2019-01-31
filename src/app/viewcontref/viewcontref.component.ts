import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-viewcontref',
  templateUrl: './viewcontref.component.html',
  styleUrls: ['./viewcontref.component.css']
})
export class ViewcontrefComponent implements OnInit {
  names=["Adama","Garry","Harry"]
  @ViewChild('content') content;
  @ViewChild('container',{read:ViewContainerRef}) container:ViewContainerRef;
  constructor() { }

  ngOnInit() {
  }
  search()
  {this.container.createEmbeddedView(this.content)
  }
  clear()
  {
    this.container.clear();
  }
}
