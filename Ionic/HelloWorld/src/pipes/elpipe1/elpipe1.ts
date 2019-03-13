import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the Elpipe1Pipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'elpipe1',
})
export class Elpipe1Pipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, defaultText = 'Sin texto') {
    return (value) ? value : defaultText;
  }
}
