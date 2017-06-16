import { WebApplication1Page } from './app.po';

describe('web-application1 App', () => {
  let page: WebApplication1Page;

  beforeEach(() => {
    page = new WebApplication1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
