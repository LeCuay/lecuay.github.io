/**
 * This function is used in order to make easier query selectors.
 * This will return the first element catched by "query".
 * For getting all elements use $all(query: string).
 * @param {String} query The CSS selector.
 * @returns {Document} The element selected.
 */
function $(query) {
    return document.querySelector(query);
}

/**
 * This function is used in order to make easier query selectors.
 * This will return all the elements catched by "query".
 * For getting the first element use $(query: string).
 * @param {String} query The CSS selector.
 * @returns {Document[]} The elements selected.
 */
function $all(query) {
    return document.querySelectorAll(query);
}

/**
 * This function will return the width of the screen.
 * @returns {Number} Screen Width.
 */
function getWidth() {
    return (window.innerWidth > 0) ? window.innerWidth : screen.width;
}

/**
 * Returns True if device is Tablet, False otherwise.
 * @param {Boolean} landscape If Tablet is in landscape.
 * @returns {Boolean} True if is Tablet, False otherwise.
 */
function isTablet(landscape) {
    if (landscape) {
        return getWidth() >= 768 && getWidth() <= 1024 && window.matchMedia("(orientation: landscape)").matches;
    } else {
        return getWidth() > 768 && getWidth() <= 1024;
    }
}

/**
 * Returns True if device is Desktop, False otherwise.
 * @returns {Boolean} True if device is Desktop, False otherwise.
 */
function isDesktop() {
    return getWidth() >= 1025;
}

/**
 * Returns True if device is Large Desktop, False otherwise.
 * @returns {Boolean} True if device is Large Desktop, False otherwise.
 */
function isLargeDesktop() {
    return getWidth() >= 1281;
}

/**
 * Returns True if device is SmartPhone, False otherwise.
 * @returns {Boolean} True if device is SmartPhone, False otherwise.
 */
function isSmartPhone() {
    return (getWidth() >= 320 && getWidth() <= 480) || (getWidth() >= 481 && getWidth() <= 767);
}

function isElementInViewport (el) {

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function onVisibilityChange(el, callback) {
    var old_visible;
    return function () {
        var visible = isElementInViewport(el);
        if (visible != old_visible) {
            old_visible = visible;
            if (typeof callback == 'function') {
                callback();
            }
        }
    }
}