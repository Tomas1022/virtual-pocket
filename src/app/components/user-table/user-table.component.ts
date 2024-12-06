import { Component, OnInit } from '@angular/core';
import { UsrService } from '../../services/usr.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [UsrService],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  usrForm: FormGroup;
  pass: FormControl;
  identification: FormControl;
  email: FormControl;
  nams: FormControl;
  lastName: FormControl;
  age: FormControl;
  telephone: FormControl;
  Birthday: FormControl;
  dniExpedition: FormControl;
  address: FormControl;
  city: FormControl;


  constructor() {
    this.pass = new FormControl('')
    this.identification = new FormControl('')
    this.email = new FormControl('')
    this.nams = new FormControl('')
    this.lastName = new FormControl('')
    this.age = new FormControl('')
    this.telephone = new FormControl('')
    this.Birthday = new FormControl('')
    this.dniExpedition = new FormControl('')
    this.address = new FormControl('')
    this.city = new FormControl('')

    this.usrForm = new FormGroup({

      pass: this.pass,
      identification: this.identification,
      email: this.email,
      nams: this.nams,
      lastName: this.lastName,
      age: this.age,
      telephone: this.telephone,
      Birthday: this.Birthday,
      dniExpedition: this.dniExpedition,
      address: this.address,
      city: this.city

    })

  }

  handleSubmit(): void {
    console.log(this.usrForm)
  }
}

