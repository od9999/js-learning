class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let n = new Node(data, null, null);
        if (!this.root) {
            return this.root = n;
        }
        let currentNode = this.root;
        let parent = null;
        while (1) {
            parent = currentNode;
            if (data < currentNode.data) {
                currentNode = currentNode.left;
                if (currentNode === null) {
                    parent.left = n;
                    break;
                }
            } else {
                currentNode = currentNode.right;
                if (currentNode === null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data)
    }

    removeNode(node, data) {
        if (node == null) {
            return null;
        }

        if (data == node.data) {
            // no children node
            if (node.left == null && node.right == null) {
                return null;
            }
            if (node.left == null) {
                return node.right;
            }
            if (node.right == null) {
                return node.left;
            }

            let getSmallest = function(node) {
                if(node.left === null && node.right == null) {
                    return node;
                }
                if(node.left != null) {
                    return node.left;
                }
                if(node.right !== null) {
                    return getSmallest(node.right);
                }

            };
            let temNode = getSmallest(node.right);
            node.data = temNode.data;
            node.right = this.removeNode(temNode.right,temNode.data);
            return node;

        } else if (data < node.data) {
            node.left = this.removeNode(node.left,data);
            return node;
        } else {
            node.right = this.removeNode(node.right,data);
            return node;
        }
    }

    find(data) {
        var current = this.root;
        while (current != null) {
            if (data == current.data) {
                break;
            }
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right
            }
        }
        return current;
    }

    inorder() {
        this._inorder(this.root);
    }
    _inorder(node) {
        if(!!node) {
            this._inorder(node.left);
            console.log(node.data);
            this._inorder(node.right);
        }
    }


    preorder() {
        this._preorder(this.root);
    }
    _preorder(node) {
        if(!!node) {
            console.log(node.data);
            this._preorder(node.left);
            this._preorder(node.right);
        }
    }

    postorder() {
        this._postorder(this.root);
    }
    _postorder(node) {
        if(!!node) {
            this._postorder(node.left);
            this._postorder(node.right);
            console.log(node.data);
        }
    }

}

let tree = new BinarySearchTree();

tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);

tree.inorder();
console.log('--------------');
tree.preorder();
console.log('--------------');
tree.postorder;
console.log(tree.root);
console.log(tree.root.right);
console.log(tree.root.right.right);
console.log(tree.root.right.right.right);
console.log('-------');
console.log(tree.find(4));
module.exports = BinarySearchTree;