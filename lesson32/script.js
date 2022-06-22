// console.log(document.head);
// console.log(document.body.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNodegg);

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}