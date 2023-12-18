import { Pipe, PipeTransform } from '@angular/core';
import { Product } from "../models/product";

@Pipe({
  name: 'filterProducts',
  standalone: true
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: Product[], search: string): Product[] {
    return products.filter(({ title }) => title.toLowerCase().includes(search.toLowerCase()));
  }
}
