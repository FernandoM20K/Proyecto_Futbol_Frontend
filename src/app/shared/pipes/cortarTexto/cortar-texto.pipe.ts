import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cortarTexto'
})
export class CortarTextoPipe implements PipeTransform {

  transform(texto: string, ...args: unknown[]): string {
    // CM: Funcion para recortar texto hasta cierto limite
    return texto.substr(0, 360) + '...';
  }

}
