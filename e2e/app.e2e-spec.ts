import { SpreetailAppPage } from './app.po';

describe('spreetail-app App', () => {
  let page: SpreetailAppPage;

  beforeEach(() => {
    page = new SpreetailAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
