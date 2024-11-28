import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculadora';
  numero1 : number = 0;
  numero2 : number = 0;
  resultado : number = 0;

  sumar(): void {

    this.resultado = this.numero1 + this.numero2;
  }

  restar(){
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar(){
    this.resultado = this.numero1 * this.numero2;
  }
  dividir(){

    if ( this.numero2 !== 0){
      this.resultado = this.numero1 / this.numero2;
    } else {
      this.resultado = NaN;
    }

  }
}
