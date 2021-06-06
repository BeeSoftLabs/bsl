import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ejemplos-hooks',
  template: `<span>Hola {{nombre}}!</span>`,
  styles: [`span { font-family: Lato; }`]
})
export class EjemplosHooksComponent implements OnInit, OnChanges, OnDestroy {
  /**
   * zona para declarar variables
   */
  @Input() nombre;

  /**
   * el constructor es lo primero que se ejecuta,
   * buen lugar para inicializar variables
   */
  constructor() {
    this.logHookName('constructor');
    this.nombre = '';
  }

  /**
   * ciclo de vida ngOnInit,
   * buen lugar para hacer llamadas a APIs (obtener los datos que van a mostrar la pantalla)
   */
  ngOnInit(): void {
    this.logHookName('ngOnInit');
  }

  /**
   * ciclo de vida ngOnChanges
   * @param cambios
   */
  ngOnChanges(cambios: SimpleChanges): void {
    this.logHookName('ngOnChanges');
    console.log({cambios});
  }

  /**
   * ciclo de vida ngOnDestroy
   * buen lugar para limpiar
   */
  ngOnDestroy(): void {
    this.logHookName('ngOnDestroy');
  }

  private logHookName(hookName: string): void {
    console.log(`hook: ${hookName} llamado.`);
  }

}

