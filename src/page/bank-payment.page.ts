import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private element: ElementFinder;

  constructor () {
    this.element = $('#cart_navigation button');
  }

  public async confirmOrder(): Promise<void> {
    await this.element.click();
  }
}
