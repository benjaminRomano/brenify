/*
*
* Ripped from here:
* https://9to5google.com/2015/06/14/how-to-make-a-chrome-extensions/
*
*/

//grab all elements on the page
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        //if the nodeType is a text node
        if (node.nodeType === 3) {
            var text = node.nodeValue;
            
            // TODO: Replace Ben with image
            // TODO: Only match the word Ben, not any sequence of characters 'B' 'e' 'n'
            var replacedText = text.replace(/Ben/g, 'Bren');
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }

            replacedText = text.replace(/ben/g, 'bren');
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
