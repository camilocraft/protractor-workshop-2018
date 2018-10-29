import { browser } from 'protractor';
import {
  MenuContentPage,
  AddressStepPage,
  BankPaymentPage,
  OrderConfirmationPage,
  PaymentStepPage,
  ProductAddedModalPage,
  ProductListPage,
  ShippingStepPage,
  SignInStepPage,
  SummaryStepPage } from '../src/page';

describe('Buy a t-shirt', () => {

  describe('Buy T-Shirt', () => {
    beforeEach(async () => {
      await browser.get('http://automationpractice.com/');
    });

    describe('Select T-Shirt', () => {
      beforeEach(async () => {
        const menuContentPage: MenuContentPage = new MenuContentPage();
        const productListPage: ProductListPage = new ProductListPage();
        const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
        const summaryStepPage: SummaryStepPage = new SummaryStepPage();

        await menuContentPage.goToTShirtMenu();
        await productListPage.addToCar();
        await productAddedModalPage.proceedToCheckout();
        await summaryStepPage.proceedToCheckout();
      });

      describe('Log in', () => {
        beforeEach(async () => {
          const signInStepPage: SignInStepPage = new SignInStepPage();
          await signInStepPage.signIn('aperdomobo@gmail.com', 'WorkshopProtractor');
        });

        describe('Fill delivery information', () => {
          beforeEach(async () => {
            const addressStepPage: AddressStepPage = new AddressStepPage();
            const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
            const paymentStepPage: PaymentStepPage = new PaymentStepPage();
            const shippingStepPage: ShippingStepPage = new ShippingStepPage();

            await addressStepPage.proceedToCheckout();
            await shippingStepPage.acceptTermsAndProceedToCheckout();
            await paymentStepPage.payByBankWire();
            await bankPaymentPage.confirmOrder();
          });

          describe('Pay T-Shirt', () => {
            const expectedResult = 'Your order on My Store is complete.';

            it('then should be bought a t-shirt', async () => {
              const orderConfirmationPage: OrderConfirmationPage = new OrderConfirmationPage();
              await expect(orderConfirmationPage.getConfirmationMessage()).toBe(expectedResult);
            });
          });
        });

      });
    });

  });

});
