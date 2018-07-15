// 树是一种分层数据的抽象模型

// 二叉树
// 二叉树中的节点最多只能拥有两个子节点
// 左侧子节点和右侧子节点
// 二叉搜索树
// 属于二叉树 但是他只允许你左侧节点存储(比父节点)小的值，在右节点存储比父节点大的值
// 键是树中对节点的称呼

// 创建一个二叉搜索树(BST)

function BinarySearchTree() {

    // 声明一个Node类代表树中的每一个节点
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    // 代表树结构中的第一个节点(不再是头节点而是根元头节点而是根元素)
    var root = null;

    // 向树中插入一个键
    this.insert = function (key) {
        var newNode = new Node(key);
        //如果树中没有元素，则添加到根元素
        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode)
        }
    }

    var insertNode = function (node, newNode) {

        // 插入键值与当前键值比较
        // 如果插入键值小于当前键值 则往左走
        if (newNode.key < node.key) {
            // 如果左边没值 则直接插入
            if (node.left === null) {
                node.left = newNode
            }
            // 左边有值的话，递归在判断一次(让新传入的值与左边的值在做比较)
            else {
                insertNode(node.left, newNode)
            }
        }
        // 如果插入键值大于当前键值 则往右走
        else {
            // 如果右边没值的话，直接插入
            if (node.right == null) {
                node.right = newNode
            }
            // 如果右边有值的话，递归在判断一次(让新传入的值与右边的值做比较)
            else {
                insertNode(node.right, newNode)
            }
        }
    }


    // 中序遍历
    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(root, callback)
    }
    var inOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            // 递归调用 访问左侧子节点
            inOrderTraverseNode(node.left, callback);
            // 回调函数
            callback(node.key);
            // 递归调用 访问右侧子节点
            inOrderTraverseNode(node.right, callback);
        }
    }


    // 先序遍历
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root, callback)
    }
    var preOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            // 回调函数
            callback(node.key);
            // 递归调用 访问左侧子节点
            preOrderTraverseNode(node.left, callback);
            // 递归调用 访问右侧子节点
            preOrderTraverseNode(node.right, callback);
        }
    }


    // 后序遍历
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(root, callback)
    }
    var postOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            // 递归调用 访问左侧子节点
            postOrderTraverseNode(node.left, callback);
            // 递归调用 访问右侧子节点
            postOrderTraverseNode(node.right, callback);
            // 回调函数
            callback(node.key);
        }
    }

    // 寻找树中最小值
    this.min = function(){
        return minNode(root);
    }
    var minNode = function(node){
        if(node){
            // 遍历树的左边
            while(node&&node.left !==null){
                node=node.left
            }
            // 找到最左边的一个 return
            return node.key;
        }
        // 如果没有root(根元素) 则没有最小值，返回null
        return null;
    }
    this.max= function(){
        return maxNode(root);
    }
    var maxNode = function(node){
        if(node){
            // 遍历树的右边
            while(node&&node.right){
                node = node.right
            }
            // 找到最右边的节点 返回值
            return node.key
        }
        // 如果没有root(根元素) 则没有最小值，返回null
        return null
    }


    // 树搜索一个特定的值是否存在
    this.search = function(key){
        return searchNode(root,key)
    }
    var searchNode  = function(node,key){
        // 如果一开始传的值为null 或者递归此函数时，返回的node.left 或者node.right为null时(也就是树中没有这个节点)，返回false
        if(node===null){
            return false
        }
        if(key<node.key){
            // 如果要找的值小于根节点的值 则往左找，把node.left作为参数递归一次
            return searchNode(node.left,key);
        }else if(key>node.key){
            // 如果要找的值大于根节点的值 则往右找 把node.right作为参数在递归一次
            return searchNode(node.right,key);
        }else{
            // 如果要找的值等于根节点 或者 等于递归之后的 node.left 或node.right 则返回ture 说明这个节点在树之中
            return true
        }
    }



    // 删除树中特定的节点
    this.remove = function(key){
        // root在这里被作为返回值 是为了刷新节点
        root = removeNode(root,key)
    }

    var removeNode = function(node,key){
        // 如果
        if(node === null){
            return null
        }
        if(key<node.key){
            // 如果我们要找的键值比当前键值小，就沿着树的左边找下一个节点
            // 更新了节点的指针
            node.left = removeNode(node.left,key)
            // 返回了更新后的节点
            return node;
        }else if(key>node.key){
            // 如果我们要找的键值比当前键值大，就沿着树的右边找下一个节点
            // 更新了节点
            node.right = removeNode(node.right,key)
            // 返回了更新后的节点
            return node;
        }else{

            // 如果我们找到要找到的键(键和node.key相等时)

            // 第一种情况 当移除的节点没有左节点和右节点时
            if(node.left === null && node.right === null){
                // 把该节点值改为null
                node = null;
                // 返回node的值 让对应的父结点指针赋予ukk值
                return node
            }

            // 第二种情况 只有一个子节点的节点
            if(node.left === null){
                // 指针指向右侧子节点
                node = node.right;
                return node;
            }else if(node.right === null){
                // 指针指向左侧子节点
                node = node.left;
                return node;
            }

            // 第三种情况 一个有两个子节点的节点
            
            // 找到继承的节点
            // 怎么找继承的节点？
            // 其实就是找比删除节点大一点的元素，

            // 步骤一:找到该节点的右侧子节点，如果右侧节点没有左侧子节点则该右侧子节点就是 继承的节点

            // 步骤二:找到该节点的右侧子节点，如果右侧节点有左侧子节点，就继续找左侧子节点的左侧子节点，直到没有左节点时，最后那个左节点就是继承的节点


            // 找到右侧节点的最小节点
            var aux = findMinNode(node.right);
            // 把找到要继承的值赋给要删除的那个节点
            node.key = aux.key;
            // 再把要继承的的值的节点删除
            node.right = removeNode(node.right,aux.key);
            // 最后向父节点返回更新后的指针
            return node
        }
    }

    // 从传的节点开始查找 找到最小的节点
    var findMinNode = function(node){
        if(node){
            while(node&&node.left !==null){
                node=node.left
            }
            return node;
        }
        return null;
    }

}

var tree = new BinarySearchTree();
function printNode(value) {
    console.log(value)
}
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)

tree.remove(6)
tree.remove(15)
// 先访问左侧节点 在callback 在访问右侧节点 
tree.inOrderTraverse(printNode);  //中序遍历

// 先callback 在访问左侧节点  在访问右侧节点
// tree.preOrderTraverse(printNode); //先序遍历

// 先访问左侧节点 在访问右侧节点 在callback
// tree.postOrderTraverse(printNode);//后序遍历

// console.log(tree.min())  // 3
// console.log(tree.max())  // 25
// console.log(tree.search(25))  //true
// console.log(tree.search(2))   //false


