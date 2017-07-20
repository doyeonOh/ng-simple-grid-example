import { NgSimpleGridExamplePage } from './app.po';

describe('ng-simple-grid-example App', () => {
  let page: NgSimpleGridExamplePage;

  beforeEach(() => {
    page = new NgSimpleGridExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
