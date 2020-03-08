import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Kiskeya App', () => {
  const urlEnd: string = browser.baseUrl + 'end';
  const urlHome: string = browser.baseUrl + 'home';
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Home page', () => {
    page.navigateTo();
    expect(browser.getCurrentUrl()).toBe(urlHome);
  });

  it('should display END page', () => {
    page.navigateToUrl(urlEnd);
    expect(browser.getCurrentUrl()).toBe(urlEnd);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
