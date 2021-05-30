import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EjemploService } from '../ejemplo.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  /**
  * zona para declarar variables
  */
  @Input() mensajeRecibidoDelPadre: string;
  mensajeAlPadre: string;
  @Output() escucharMensajeDelHijo: EventEmitter<string>;
  datosObtenidosDelServicio: any;

  /**
   * El constructor es una buena zona para inicializar variables
   */
  constructor(public readonly ejemploS: EjemploService) {
    this.mensajeRecibidoDelPadre = '';
    this.mensajeAlPadre = '';
    this.escucharMensajeDelHijo = new EventEmitter();
    this.datosObtenidosDelServicio = {};
  }

  /**
   * el hook ngOnInit es una buena zona para darle valor a las variables.
   */
  ngOnInit(): void {
    this.mensajeAlPadre = "hola Padre";
    this.datosObtenidosDelServicio = this.ejemploS.getUserInformation('hijoComponent');
  }

  public enviarMensajeAlPadre(): void {
    this.escucharMensajeDelHijo.emit(this.mensajeAlPadre);
  }

}
