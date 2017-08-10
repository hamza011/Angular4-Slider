import { AngularSliderPage } from './app.po';

describe('angular-slider App', () => {
  let page: AngularSliderPage;

  beforeEach(() => {
    page = new AngularSliderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
