import { GithubAppPage } from './app.po';

describe('github-app App', function() {
  let page: GithubAppPage;

  beforeEach(() => {
    page = new GithubAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
