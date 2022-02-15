/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type contactPage = typeof import('./pages/ContactPage.js');
type homePage = typeof import('./pages/HomePage.js');
type headerFragment = typeof import('./fragments/Header.js');
type AssertWrapper = import('codeceptjs-assert');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, contactPage: contactPage, homePage: homePage, headerFragment: headerFragment }
  interface Methods extends Playwright, AssertWrapper {}
  interface I extends ReturnType<steps_file>, WithTranslation<AssertWrapper> {}
  namespace Translation {
    interface Actions {}
  }
}
