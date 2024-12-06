import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],

})
export class AppModule { }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'virtual-pocket';

  nombre: string = "Tomas";
  apellido: string = "Herrera";
  edad: number = 18;
  wallet: number = 138.000;

  caminar(): boolean {
    console.log('estoy caminando');
    return true;
  }

  comer() {
    console.log('estoy comiento');
  }

  sendMoney(money: number) {
    this.wallet = this.wallet - money;
  }

}
