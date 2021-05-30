import { Component, OnInit } from '@angular/core';
import { EjemploService } from '../ejemplo.service';

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
  datosObtenidosDelServicio: any;

  /**
   * El constructor es una buena zona para inicializar variables
  */
  constructor(public readonly ejemploS: EjemploService) {
    this.mensajeAlHijo = '';
    this.mensajeRecibidoDelHijo = '';
    this.datosObtenidosDelServicio = {};
  }

  /**
   * el hook ngOnInit es una buena zona para darle valor a las variables.
  */
  ngOnInit(): void {
    this.mensajeAlHijo = 'hola Hijo';
    this.datosObtenidosDelServicio = this.ejemploS.getUserInformation('padreComponent');
  }

  public recibirMensajeDelHijo(mensajeRecibidoDelHijo: string): void {
    this.mensajeRecibidoDelHijo = mensajeRecibidoDelHijo;
  }


}
