//## Activity 4: Binary Tree

//- Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.

class BSTNode{
    constructor(key,left = null,right = null){
        this.key = key
        this.left = left
        this.right = right
    }
}

//- Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.

class BST {
    constructor(){
        this.root = null
    }
    insert(key){
        const newNode = new BSTNode(key)
        if(!this.root){
            this.root = newNode
        }
        else{
            this.insertion(this.root,newNode)
        }
    }
    insertion(node,newNode){
        if(node.key > newNode.key){
            if(!node.left){
                node.left = newNode
            }
            else{
                this.insertion(node.left,newNode)
            }
        }
        else{
            if(!node.right){
                node.right = newNode
            }
            else{
                this.insertion(node.right,newNode)
            }
        }
    }
    inorder(){
        const result = []
        this.inOrderTraversal(this.root,result)
        return result
    }
    inOrderTraversal(node,result){
        if(node!=null){ 
            this.inOrderTraversal(node.left, result)
            result.push(node.key)
            this.inOrderTraversal(node.right,result)
        }
    }
}