import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  username: string;
  transform(value: any, searchvalue: string): unknown {
    if(searchvalue === this.username){
      return value.filter(val => val.name.indexOf(searchvalue) !== -1);
    }
  }

}
