const { NotImplementedError } = require('../extensions/index.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    if (!this.qwerty){
      return this.qwerty = null;
    } else {
      return this.qwerty;
    }
    
  }

  add(data) {
    this.qwerty = addWithin(this.qwerty, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchWithin(this.qwerty, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? 
        searchWithin(node.left, data) : 
        searchWithin(node.right, data);
    }
  }

  find(data) {
    return findData(this.qwerty, data);

    function findData(node, data) {
      if (node === null || node.data === data) {
        return node;
      }

      return data < node.data ? 
        findData(node.left, data) : 
        findData(node.right, data);
    }
  }

  remove(data) {
    this.qwerty = removeNode(this.qwerty, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
      }
      if (!node.left) {
        node = node.right;
        return node;
      }

      if (!node.right) {
        node = node.left;
        return node;
      }

      let minFromRight = node.right;
      while (minFromRight.left) {
        minFromRight = minFromRight.left;
      }

      node.data = minFromRight.data;

      node.right = removeNode(node.right, minFromRight.data);

      return node;
    }
  }

  min() {
    if (!this.qwerty) {
      return;
    }

    let node = this.qwerty;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.qwerty) {
      return;
    }

    let node = this.qwerty;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};