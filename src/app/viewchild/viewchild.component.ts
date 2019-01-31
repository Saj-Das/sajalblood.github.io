import { Component, OnInit, ViewChild } from '@angular/core';
import { ReactiveformComponent } from '../reactiveform/reactiveform.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {
  @ViewChild(ReactiveformComponent) reactiveformcom: ReactiveformComponent
  @ViewChild('myelement') myelement:any
  
  constructor() { }

  ngOnInit() {
  }
  submit() {
    // this.reactiveformcom.onsubmit();
  console.log(  this.myelement.nativeElement.value)
  }

}
