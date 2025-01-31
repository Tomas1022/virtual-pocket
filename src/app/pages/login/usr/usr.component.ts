import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsrService } from '../../../services/usr.service';

@Component({
  selector: 'app-usr',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './usr.component.html',
  styleUrl: './usr.component.css'
})
export class UsrComponent {
  user: any;
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  usrLogin: FormGroup;
  identification: FormControl;
  password: FormControl;

  constructor(private userService: UsrService) {
    this.identification = new FormControl('', [Validators.required, Validators.maxLength(15)])
    this.password = new FormControl('', [Validators.required, Validators.maxLength(20)])
    this.usrLogin = new FormGroup({
      identification: this.identification,
      password: this.password
    })
  }
  handleSubmit() {
    console.log(this.usrLogin.value);
    this.userService.login(this.identification.value, this.password.value);

  }
}
