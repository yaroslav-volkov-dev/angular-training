import { Component, Input } from "@angular/core";
import { Product } from "../../models/product";
import { CurrencyPipe, NgClass, NgIf, NgOptimizedImage, NgStyle } from "@angular/common";

@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html',
  imports: [
    NgOptimizedImage,
    CurrencyPipe,
    NgIf,
    NgClass,
    NgStyle
  ],
  standalone: true
})
export class ProductComponent {
  @Input() product: Product;

  isDetailsVisible = false;
}
