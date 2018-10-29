import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private element: ElementFinder;

  constructor () {
    this.element = $('a[title="Add to cart"]');
  }

  public async addToCar(): Promise<void> {
    await this.element.click();
  }
}
