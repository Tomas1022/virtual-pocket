import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, EmailValidator, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  user: any;
  usrSignup: FormGroup;
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
    this.age = new FormControl(0, [Validators.required, Validators.min(16)])
    this.telephone = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(12)])
    this.birthday = new FormControl('', [Validators.required, this.validateAge()]);
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
    });


  }

  form() {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }

  toggleRed() {
    this.pass
  };

  handleSubmit(): void {

    const bodyUser = {
      ...this.usrSignup.value,
      idRol: 1
    }

    console.log(bodyUser)
  }

  getMessageError(control: FormControl, name: string = "", minL: number = 0, maxL: number = 0) {
    if (control?.hasError('required')) {
      return `${name} is required`;
    } else if (control?.hasError('minlength')) {
      return `Minimun ${minL} characters`;
    } else if (control?.hasError('maxlength')) {
      return `Max ${maxL} characters`;
    } else if (control?.hasError('customValitadorAge')) {
      return `Minimun age 16`
    }
    return '';

  }

  calculateAge() {
    if (this.birthday) {
      const valueBirthday = new Date(this.birthday.value);
      const dateNow = Date.now();

      let diferencia = dateNow - valueBirthday.getTime();
      let anos = diferencia / (1000 * 60 * 60 * 24 * 365.25);

      const valueAge = Math.floor(anos);

      return valueAge;
    }
    return 0;
  }

  validateAge(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const valueAge = this.calculateAge();
      if (valueAge >= 16) {
        return null;
      } else {
        this.age.reset();
        return { customValitadorAge: true };
      }
    };
  }

  showAge() {
    const valueAge = this.calculateAge();
    if (valueAge >= 16) {
      this.age.setValue(valueAge);
    }
  }


}


