import { Demo0516Page } from './app.po';

describe('demo0516 App', () => {
  let page: Demo0516Page;

  beforeEach(() => {
    page = new Demo0516Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
