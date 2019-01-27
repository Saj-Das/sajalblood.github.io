import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getData() {
    return [{ name: "John", salary: 17000 },
    { name: "Adam", salary: 15000 },
    { name: "Rosy", salary: 10000 },
    { name: "Chris", salary: 20000 },
    { name: "Joseph", salary: 25000 },
    { name: "Mandy", salary: 17000 }]
  }
}
