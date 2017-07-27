import { RecipieAppPage } from './app.po';

describe('recipie-app App', () => {
  let page: RecipieAppPage;

  beforeEach(() => {
    page = new RecipieAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
