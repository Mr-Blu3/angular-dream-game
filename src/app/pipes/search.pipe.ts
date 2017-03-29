import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Object[], term: string): Object[] {

    return value.filter((val) => {
      for (let i in val)
        return val[i].toLowerCase().startsWith(term.toLowerCase());
    });
  }
}
