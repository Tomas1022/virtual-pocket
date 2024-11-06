import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowNameComponent } from './show-name/show-name.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShowNameComponent],
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
