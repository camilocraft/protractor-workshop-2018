import { $$, ElementFinder, ElementArrayFinder } from 'protractor';

export class ProductListPage {

  private products: ElementArrayFinder;

  constructor () {
    this.products = $$('.product-container');
  }

  public async selectProduct(productName: string): Promise<void> {
    const element: ElementFinder = this.findByProduct(productName);
    await element.$('a[title="Add to cart"]').click();
  }

  private findByProduct(productName: string): ElementFinder {
    return this.products
                  .filter((element: ElementFinder) =>
                    element.$('.product-name')
                      .getText()
                      .then((text: string) => text.includes(productName)))
                  .first();
  }

}
