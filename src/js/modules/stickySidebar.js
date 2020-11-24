import 'sticky-sidebar';
export default function () {
    let stickyClass = '.js-sticky-sidebar';

    if (document.querySelector(stickyClass)) {
        var sidebar = new StickySidebar(stickyClass, {
            topSpacing: 40,
            bottomSpacing: 0,
            containerSelector: '.js-sticky-wrapper',
            innerWrapperSelector: '.js-sticky-block',
            minWidth: 1100
        });
    }

    //-
}