const assert = require("assert");
const { I } = inject();

module.exports = {

    root: '#masthead',
    siteTitleLink: locate('a').withAttr({rel: 'home'}),
    navigationMenu: locate('#menu-primary'),

    locateNavigationLinkById(id) {
        return locate(this.navigationMenu.find(id).find('a'));
    },




    // insert your locators and methods here
}
