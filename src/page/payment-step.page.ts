import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private element: ElementFinder;

  constructor () {
    this.element = $('.bankwire');
  }

  public async payByBankWire(): Promise<void> {
    await this.element.click();
  }
}
