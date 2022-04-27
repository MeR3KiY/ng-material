import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollar'
})
export class DollarPipe implements PipeTransform {

  transform(dollar: string): any {
    console.log(dollar)
    return dollar + '$';

  }



}
