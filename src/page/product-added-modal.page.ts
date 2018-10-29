import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';

export class ProductAddedModalPage {
  private element: ElementFinder;

  constructor () {
    this.element = $('a[title="Proceed to checkout"]');
  }

  public async proceedToCheckout(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.element), 1000);
    await this.element.click();
  }
}
