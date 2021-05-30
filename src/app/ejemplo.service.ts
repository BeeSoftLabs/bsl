import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EjemploService {

  private ejemploVariableCompartida: string;

  constructor() {
    this.ejemploVariableCompartida = 'esta variable es compartida!';
  }

  public getUserInformation(origen: string): any {
    return {
      nombre: 'Angular',
      edad: 30,
      origen: origen
    };
  }

  public getVariableCompartida = () => this.ejemploVariableCompartida;
}
