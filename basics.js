/**
 *
 * @type {*|Function}
 */
Node.prototype.insertAfter = Node.prototype.insertAfter ||
    function (element) {
        this.parentNode && (
            this.nextSibling ?
                this.parentNode.insertBefore(element, this.nextSibling) :
                this.parentNode.appendChild(element)
        );
    };

/**
 *
 * @type {Function}
 */
HTMLCollection.prototype.forEach = HTMLCollection.prototype.forEach ||
    function (callBack) {
        for (let i = 0; i < this.length; i++) {
            callBack(this[i]);
        }
    };

/**
 *
 * @param {string} type
 * @param {HTMLElement} container
 * @param {Object} properties
 * @return {HTMLElement}
 */
function createHtmlElem(type, container, properties) {
    let elem = document.createElement(type);
    setElementProperty(elem, properties);
    container && container.appendChild(elem);
    return (elem);
}

/**
 *
 * @param {Object} elem
 * @param {Object} properties
 */
function setElementProperty(elem, properties) {
    if (properties) {
        for (let key in properties) {
            if (typeof properties[key] === 'object') {
                setElementProperty(elem[key], properties[key]);
            }
            else {
                elem[key] = properties[key];
            }
        }
    }
}

/**
 * Return browser screen Height
 * @return {number}
 * @constructor
 */
function BrowserScreenHeight() {
  return document.documentElement.clientHeight;
}

/**
 * Return browser screen Width
 * @return {number}
 * @constructor
 */
function BrowserScreenWidth() {
  return document.documentElement.clientWidth;
}
