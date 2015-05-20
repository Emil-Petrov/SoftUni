var nodes;
function traverse(selector) {
    nodes = document.querySelectorAll(selector);
    for (var i = 0; i < nodes.length; i++){
        traverseNodes(nodes[i],'');
    }
    function traverseNodes(node, spacing){
        for (var i = 0; i < node.childNodes.length; i++){
            var currentNode = node.childNodes[i];
            if (currentNode.nodeType === document.ELEMENT_NODE){
                var id = currentNode.id;
                var nodeClass = currentNode.className;
                var output = currentNode.nodeName.toLowerCase()+": ";
                if (id){
                    output += "\"id= " + id + "\"";
                }
                if (nodeClass){
                    output += "\"class= " + nodeClass + "\"";
                }
                console.log(spacing + output)
                traverseNodes(currentNode, spacing + "   ");
            }
        }
    }
}
