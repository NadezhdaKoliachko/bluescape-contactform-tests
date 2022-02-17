/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type contactPage = typeof import('./pages/ContactPage.js');
type AssertWrapper = import('codeceptjs-assert');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, contactPage: contactPage }
  interface Methods extends Playwright, AssertWrapper {}
  interface I extends ReturnType<steps_file>, WithTranslation<AssertWrapper> {}
  namespace Translation {
    interface Actions {}
  }
}
