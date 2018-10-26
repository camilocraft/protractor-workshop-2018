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
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const orderConfirmationPage: OrderConfirmationPage = new OrderConfirmationPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const productListPage: ProductListPage = new ProductListPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {

    const expectedResult = 'Your order on My Store is complete.';

    await browser.get('http://automationpractice.com/');
    await(browser.sleep(2000));

    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(1000));

    await productListPage.addToCar();
    await(browser.sleep(1000));

    await productAddedModalPage.proceedToCheckout();
    await(browser.sleep(1000));

    await summaryStepPage.proceedToCheckout();
    await(browser.sleep(1000));

    await signInStepPage.signIn('aperdomobo@gmail.com', 'WorkshopProtractor');
    await(browser.sleep(1000));

    await addressStepPage.proceedToCheckout();
    await(browser.sleep(1000));

    await shippingStepPage.acceptTermsAndProceedToCheckout();
    await(browser.sleep(1000));

    await paymentStepPage.payByBankWire();
    await(browser.sleep(1000));

    await bankPaymentPage.confirmOrder();
    await(browser.sleep(1000));

    await expect(orderConfirmationPage.getConfirmationMessage()).toBe(expectedResult);
  });
});
