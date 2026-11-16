import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals-example5',
  standalone: true,
  templateUrl: './example-5-computed-with-multiple-dependencies.component.html',
  styleUrl: '../styles/computed-demo.scss',
})
export class Example5Component {
  readonly price = signal(100);
  readonly quantity = signal(2);
  readonly discount = signal(0.1);
  readonly totalPrice = computed(() => this.price() * this.quantity() * (1 - this.discount()));

  increasePrice(): void {
    this.price.update(value => value + 10);
  }

  decreasePrice(): void {
    this.price.update(value => Math.max(0, value - 10));
  }

  increaseQuantity(): void {
    this.quantity.update(value => value + 1);
  }

  decreaseQuantity(): void {
    this.quantity.update(value => Math.max(1, value - 1));
  }

  toggleDiscount(): void {
    this.discount.set(this.discount() === 0.1 ? 0.2 : 0.1);
  }

  reset(): void {
    this.price.set(100);
    this.quantity.set(2);
    this.discount.set(0.1);
  }
}
