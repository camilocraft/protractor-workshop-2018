import { $, ElementFinder } from 'protractor';

export class OrderConfirmationPage {
  private element: ElementFinder;

  constructor () {
    this.element = $('.cheque-indent strong');
  }

  public async getConfirmationMessage(): Promise<string> {
    return await this.element.getText();
  }
}
