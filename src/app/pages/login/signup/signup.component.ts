import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  isDark = true;

  form() {
    throw new Error('Method not implemented.');
  }
  user: any;
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  usrSignup: FormGroup
  pass: FormControl;
  identification: FormControl;
  email: FormControl;
  nams: FormControl;
  lastName: FormControl;
  age: FormControl;
  telephone: FormControl;
  birthday: FormControl;
  dniExpedition: FormControl;
  address: FormControl;
  city: FormControl;
  constructor() {
    this.pass = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
    this.identification = new FormControl('', [Validators.required, Validators.maxLength(15)])
    this.email = new FormControl('', [Validators.required, Validators.email])
    this.nams = new FormControl('', [Validators.required, Validators.maxLength(100)])
    this.lastName = new FormControl('', [Validators.required, Validators.maxLength(100)])
    this.age = new FormControl('', [Validators.required, Validators.minLength(2), Validators.min(16)])
    this.telephone = new FormControl('', [Validators.required, Validators.maxLength(12)])
    this.birthday = new FormControl('', [Validators.required])
    this.dniExpedition = new FormControl('', [Validators.required])
    this.address = new FormControl('', [Validators.required, Validators.maxLength(50)])
    this.city = new FormControl('', [Validators.required, Validators.maxLength(25)])
    this.usrSignup = new FormGroup({
      pass: this.pass,
      identification: this.identification,
      email: this.email,
      nams: this.nams,
      lastName: this.lastName,
      age: this.age,
      telephone: this.telephone,
      birthday: this.birthday,
      dniExpedition: this.dniExpedition,
      address: this.address,
      city: this.city
    })
  }
  toggleRed() {
    this.pass
  };
  handleSubmit(): void {
    console.log(this.pass);
    console.log(this.usrSignup)
  }

  getMessageError(control: FormControl, name: string = "") {
    if (control?.hasError('required')) {
      return `${name} is required`;
    } else if (control?.hasError('minlength')) {
      return name + 'minimun eight characters';
    } else if (control?.hasError('maxlength')) {
      return name + 'max twenty characters';
    }
    return '';
  }
}