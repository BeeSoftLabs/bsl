import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent implements OnInit {

  /**
  * zona para declarar variables
  */
  mensajeAlHijo: string;
  mensajeRecibidoDelHijo: string;

  /**
   * El constructor es una buena zona para inicializar variables
  */
  constructor() {
    this.mensajeAlHijo = '';
    this.mensajeRecibidoDelHijo = '';
  }

  /**
   * el hook ngOnInit es una buena zona para darle valor a las variables.
  */
  ngOnInit(): void {
    this.mensajeAlHijo = 'hola Hijo';
  }

  public recibirMensajeDelHijo(mensajeRecibidoDelHijo: string): void {
    this.mensajeRecibidoDelHijo = mensajeRecibidoDelHijo;
  }


}
