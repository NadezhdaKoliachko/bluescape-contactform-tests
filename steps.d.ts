/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type contactPage = typeof import('./pages/ContactPage.js');
type cssHelper = typeof import('./helpers/cssHelper.js');
type data = typeof import('./data.js');
type AssertWrapper = import('codeceptjs-assert');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, contactPage: contactPage, cssHelper: cssHelper, data: data }
  interface Methods extends Puppeteer, AssertWrapper {}
  interface I extends ReturnType<steps_file>, WithTranslation<AssertWrapper> {}
  namespace Translation {
    interface Actions {}
  }
}
