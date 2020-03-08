import { browser } from 'protractor';

export class AppPage {

  navigateToUrl(url: string) {
    return browser.get(url) as Promise<any>;
  }

  navigateTo() {
    return this.navigateToUrl(browser.baseUrl);
  }

}
