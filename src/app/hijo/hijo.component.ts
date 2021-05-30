import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  /**
   * El constructor es una buena zona para inicializar variables
   */
  constructor() {
    this.mensajeRecibidoDelPadre = '';
    this.mensajeAlPadre = '';
    this.escucharMensajeDelHijo = new EventEmitter();
  }

  /**
   * el hook ngOnInit es una buena zona para darle valor a las variables.
   */
  ngOnInit(): void {
    this.mensajeAlPadre = "hola Padre";
  }

  public enviarMensajeAlPadre(): void {
    this.escucharMensajeDelHijo.emit(this.mensajeAlPadre);
  }

}
