import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private proceedToCheckoutButton: ElementFinder;
  private acceptTermsCheckbox: ElementFinder;

  constructor () {
    this.proceedToCheckoutButton = $('.cart_navigation button');
    this.acceptTermsCheckbox = $('#cgv');
  }

  public async acceptTermsAndProceedToCheckout(): Promise<void> {
    await this.acceptTermsCheckbox.click();
    await this.proceedToCheckoutButton.click();
  }
}
