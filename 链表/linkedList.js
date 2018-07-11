// 链表 存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的
// 每个元素由一个存储元素本身节点和一个指向下一个元素的引用(也称指针或者链接)组成

    // 创建链表
    function LinkedList(){
        // Node 辅助类 表示要加入列表的项。
        // 包含一个element属性(添加到列表的值)
        // 以及一个next属性(指向下一个节点的指针)
        var Node = function(element){
            this.element = element;
            this.next = null;
        }
        // 存储列表项的数量length 
        var length = 0;
        // 存储一个节点的引用存在head中(指针)
        // 对第一个节点的指针
        var head = null;
        
        // this.append()
        // 向LinkedList对象尾部添加一个元素
        // 当列表为空时，添加第一个元素，不为空时，向其追加元素
        this.append = function(element){

            var node = new Node(element);
            // 指向列表中第几项的变量current
            var current;
            if(head === null){
                head = node
            }else{
                current = head;
                // 循环列表 当current.next始终指向null时，就是最后一项
                while(current.next){
                    current = current.next
                }
                // 找到最后一项，将next赋值给node;
                current.next = node;
            }
            length++ //更新列表的长度
        }

        // 在链表任意位置删除元素
        this.removeAt = function (position){
            if( position>-1 && position<length){
                // 创建current为对第一个元素的指针 如果把head指向current.next的话就是删除第一个元素
                var current = head;
                // 对当前元素前一个元素的引用(指针)
                var previous;
                // 内部控制递增的index变量
                var index =0;
                if(position === 0 ){
                    // 上面定义了current为对第一个元素的指针 如果把head指向current.next的话就是删除第一个元素(跳过了第一个元素)
                    head = current.next
                }else{
                    // 这个循环的意思就是迭代，循环 找到指向删除元素的这项 current 和 指向删除元素的上一项previous
                    while(index++ < position){
                        previous = current ;
                        current = current.next;
                    }
                    // 循环找到准备删除的current只需要把指向current的指针 previous.next指向current的下一个也就是current.next这样就跳过了current
                    previous.next = current.next;
                }
                // 删除后把长度减1
                length --;

                return current.element;
            }else{
                // 输入的数值不是有效位置则返回null 无意义
                return null;
            }
        }

        // 在链表任意位置插入元素
        this.insert = function (position,element){
            if(position>=0 && position<=length){ 
                var node = new Node(element);
                // head是对第一个节点的指针 所以current指向插入之前的第一个节点
                var current = head;
                var previous;
                var index =0;
                // 在第一个位置添加元素
                if(position === 0){ 
                    // 新插入元素node指向之前的第一个节点
                    node.next = current;
                    // head重新指向node
                    head = node;
                }else{
                    // 循环迭代 找到准备添加元素的前一项和后一项
                    while(index++ < position){
                        previous = current;
                        current = current.next;
                    }
                    // 找到准备添加元素的前一项和后一项,把前一项的指针指向新插入的node 在把node的指针指向后一项的元素
                    node.next = current
                    previous.next = node;
                }
                // 更新列表长度
                length++
                
                return true;
            }else{
                return false;
            }
        }

        // tostring()方法 把linkedList对象转换成一个字符串
        this.toString = function(){
            var current = head;
            var string ='';

            while(current){
                string += ',' + current.element;
                current = current.next;
            }
            return string.slice(1);
        }

        // indexof()方法 在链表中寻找元素 如果有则返回该元素的位置 没有则返回-1
        this.indexof = function(element){
            var current = head;
            var index =0 ;
            while(current){
                if(element === current.element){
                    return index
                }
                index++
                current = current.next
            }
            return -1
        }

        // remove方法 利用indexof方法 和removeAt方法 从列表中移除一项
        this.remove = function (element){
            var index = this.indexof(element);
            return this.removeAt(index)
        }

        // isEmpty方法 判断列表是否为空
        this.isEmpty = function(){
            return length === 0
        }

        // size方法 返回链表的长度
        this.Size = function(){
            return length
        }

        // getHead方法
        this.getHead = function(){
            return head;
        }
    }


    var list = new LinkedList();
    list.append(15)
    list.append(10)
    list.removeAt(1)
    list.append(15)
    list.append(10)
    list.append(10)
    list.insert(3,12)
    list.insert(4,14)
    list.insert(5,12)
    // list.remove(12)
    console.log(list.toString())
    // console.log(list.removeAt(1))
    console.log(list.indexof(15))
    console.log(list.isEmpty())
    console.log(list.Size())
    console.log(list.getHead())









