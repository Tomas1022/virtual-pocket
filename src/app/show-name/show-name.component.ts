import { Component } from '@angular/core';

@Component({
  selector: 'app-show-name',
  standalone: true,
  imports: [],
  templateUrl: './show-name.component.html',
  styleUrl: './show-name.component.css'
})
export class ShowNameComponent {
  nombre: string = 'Tomas Herrera El mejor';
}
