import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class mayusculas implements PipeTransform {

    transform(): String {
        return "Hola";
    }
}