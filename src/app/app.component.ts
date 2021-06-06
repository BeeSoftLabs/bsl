import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * zona para declarar variables
   */
  mostrarComponente = true;
  nombre = 'Beeman';

  public handleClick(): void {
    this.mostrarComponente = !this.mostrarComponente;
  }

  public getNombreBoton(): string {
    return (this.mostrarComponente) ? 'ocultar componente': 'mostrar componente';
  }
}
