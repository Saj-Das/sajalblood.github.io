import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
 
  registerForm:FormGroup
  constructor() { }

  ngOnInit() {
    this.registerForm=new FormGroup({
      name:new FormControl('',[Validators.required]),
    });
  }
  get f() { return this.registerForm.controls; }

  onsubmit() {
    console.log(this.registerForm.value)
  }

}
