import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

    transform( valor: String, enMayusculas: Boolean = true): String {
        return enMayusculas ? valor.toUpperCase() : valor.toLowerCase();
    }
}