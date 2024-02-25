import { Component, OnInit } from '@angular/core';
import { MatDatepicker } from '@angular/material';

@Component({
  //selector: 'pm-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  username!: string;
  password!: string;
  dob!: Date;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    // Here you can check if username and password match some hardcoded data
    if (this.username === 'admin' && this.password === 'password') {
      alert('Welcome ' + this.username);
      // You can navigate to the welcome page here
    } else {
      alert('Incorrect username or password');
    }
  }

  // Function to close datepicker when clicked outside
  closeDatepicker(picker: MatDatepicker<Date>) {
    picker.close();
  }

  closeDatepicker1(picker1: MatDatepicker<Date>) {
    picker1.close();
  }
}
