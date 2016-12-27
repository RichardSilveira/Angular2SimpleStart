import { CustomTestsPage } from './app.po';

describe('custom-tests App', function() {
  let page: CustomTestsPage;

  beforeEach(() => {
    page = new CustomTestsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
