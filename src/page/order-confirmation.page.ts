import { $, ElementFinder } from 'protractor';

export class OrderConfirmationPage {
  private element: ElementFinder;

  constructor () {
    this.element = $('#center_column > div > p > strong');
  }

  public async getConfirmationMessage(): Promise<string> {
    return await this.element.getText();
  }
}
