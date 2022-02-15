const { I } = inject();

module.exports = {

    root: '#masthead',
    siteTitleLink: locate('a').withAttr({rel: 'home'}),
    navigationMenu: locate('#menu-primary'),

    locateNavigationLinkById(id) {
        return locate('a').inside(this.navigationMenu.find(id));
    }

    // insert your locators and methods here
}
