import { NewafPage } from './app.po';

describe('newaf App', () => {
  let page: NewafPage;

  beforeEach(() => {
    page = new NewafPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
