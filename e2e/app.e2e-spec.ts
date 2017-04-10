import { ReproNgVersionPage } from './app.po';

describe('repro-ng-version App', () => {
  let page: ReproNgVersionPage;

  beforeEach(() => {
    page = new ReproNgVersionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
