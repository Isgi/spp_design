import { KeuanganPage } from './app.po';

describe('keuangan App', function() {
  let page: KeuanganPage;

  beforeEach(() => {
    page = new KeuanganPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
