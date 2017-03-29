import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'key'
})
export class KeyPipe implements PipeTransform {

  transform(value: Object): Object {
    let keys = [];

    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }

    return keys;
  }

}
