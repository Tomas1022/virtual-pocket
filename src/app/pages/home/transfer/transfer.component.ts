import { NgClass } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.css'
})
export class TransferComponent {
  transaction: any;
  transactionForm: FormGroup;
  amount: FormControl;
  dat: FormControl;
  referencs: FormControl;
  receptor: FormControl;
  typ: FormControl;

  constructor() {
    this.amount = new FormControl('',);
    this.dat = new FormControl('',);
    this.referencs = new FormControl('',);
    this.receptor = new FormControl('',);
    this.typ = new FormControl('',);
    this.transactionForm = new FormGroup({
      amount: this.amount,
      dat: this.dat,
      referencs: this.referencs,
      receptor: this.receptor,
      typ: this.typ
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
      ...this.transactionForm.value,
      idRol: 1
    }

    console.log("hola")
  }
}
