
/*--- Utils ---*/

function addClassToElement(element, className) {
    (element.classList) ? element.classList.add(className) : element.className += ' ' + className
    return element
}
  

function removeClassFromElement(element, className) {
    if(element.classList) {
        element.classList.remove(className)
    } else {
        element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
    }
    return element
}

exports.addClassToElement = addClassToElement
exports.removeClassFromElement = removeClassFromElement