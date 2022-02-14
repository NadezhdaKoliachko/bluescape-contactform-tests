/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePagePage = typeof import('./pages/HomePage.js');
type contactPagePage = typeof import('./pages/ContactPage.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePagePage: homePagePage, contactPagePage: contactPagePage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
