import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {
  user={fname:""}
  constructor() { }

  ngOnInit() {
  }
  onsubmit(form) {
    console.log(form.value)
  }
}
