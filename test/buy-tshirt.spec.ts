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

describe('Scenario: Buy a T-shirt', () => {

  describe('When client open the navigation page', () => {
    beforeEach(async () => {
      await browser.get('http://automationpractice.com/');
    });

    describe('and selects a T-Shirt', () => {
      beforeEach(async () => {
        const tShirtName = 'Faded Short Sleeve T-shirts';
        const menuContentPage: MenuContentPage = new MenuContentPage();
        const productListPage: ProductListPage = new ProductListPage();
        const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
        const summaryStepPage: SummaryStepPage = new SummaryStepPage();

        await menuContentPage.goToTShirtMenu();
        await productListPage.selectProduct(tShirtName);
        await productAddedModalPage.proceedToCheckout();
        await summaryStepPage.proceedToCheckout();
      });

      describe('and Log in', () => {
        beforeEach(async () => {
          const signInStepPage: SignInStepPage = new SignInStepPage();
          await signInStepPage.signIn('aperdomobo@gmail.com', 'WorkshopProtractor');
        });

        describe('and fill delivery information', () => {
          beforeEach(async () => {
            const addressStepPage: AddressStepPage = new AddressStepPage();
            const shippingStepPage: ShippingStepPage = new ShippingStepPage();

            await addressStepPage.proceedToCheckout();
            await shippingStepPage.acceptTermsAndProceedToCheckout();
          });

          describe('and pay the order ', () => {
            const expectedResult = 'Your order on My Store is complete.';

            beforeEach(async () => {
              const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
              const paymentStepPage: PaymentStepPage = new PaymentStepPage();
              await paymentStepPage.payByBankWire();
              await bankPaymentPage.confirmOrder();
            });

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
