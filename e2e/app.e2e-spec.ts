import { OseWallUiPage } from './app.po';

describe('ose-wall-ui App', () => {
  let page: OseWallUiPage;

  beforeEach(() => {
    page = new OseWallUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
