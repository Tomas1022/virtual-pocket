import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-changepassword',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './changepassword.component.html',
  styleUrl: './changepassword.component.css'
})
export class ChangepasswordComponent {
  changePassword: any;
  changePasswordForm: FormGroup;
  email: FormControl;
  newPassword: FormControl;
  confirmPassword: FormControl;

  constructor() {
    this.email = new FormControl(''),
      this.newPassword = new FormControl(''),
      this.confirmPassword = new FormControl(''),
      this.changePasswordForm = new FormGroup({
        email: this.email,
        newPassword: this.newPassword,
        confirmPassword: this.confirmPassword
      });
  }
  form() {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }
  handleSubmit(): void {

    const bodyUser = {
      ...this.changePasswordForm.value,
      idRol: 1
    }

    console.log("hola")
  }
}
