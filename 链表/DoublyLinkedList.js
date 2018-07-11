// 双向链表

// 双向链表和普通链表的区别在于: 
// 在链表中,一个节点只有链向下一个节点的链接.
// 在双向链表中链接是双向的:一个指向下一个元素,一个指向前一个元素

// 双向链表提供了两种迭代方法  从头到尾  或者 从尾到头 
// 我们也可以访问一个特定节点的下一个或者前一个元素


function DoublyLinkList() {
    var Node = function (element) {
        this.element = element;
        // next 指向下一个元素
        this.next = null;
        // prev 指向上一个元素
        this.prev = null;
    }

    var length = 0;
    // head 指向链表第一个元素
    var head = null;
    // tail 指向链表最后一个元素
    var tail = null;

    // 在链表中任意位置插入一个新元素
    this.insert = function (position, element) {
        if (position >= 0 && position <= length) {
            var node = new Node();
            var current = head;
            var previous;
            var index = 0;

            if (position === 0) {
                if (!head) {
                    // 当双向链表为空时
                    // 把head指向新增加的元素 head始终指向链表第一个元素
                    head = node;
                    // 把tail指向新增加元素   tail始终指向链表最后一个元素
                    tail = node
                } else {
                    // 当双向链表不为空时

                    //新增元素指向之前链表的第一个元素 current之前被定义为head 即链表第一个元素 
                    node.next = current;
                    // 重新定义head指向
                    head = node
                    // 之前第一个元素的prev指向新元素
                    current.prev = node;
                }
            } else if (position === length) {
                // 重新定义current为指向插入新元素前的最后一个元素
                current = tail;
                // current指向 新插入的元素
                current.next = node;
                // 新插入元素的prev指向 current
                node.prev = current;
                // 重新定义tail指向新元素
                tail = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                // 找到插入值的前一项previous 和后一项current

                // 新插入元素next指向 下一个元素
                node.next = current;
                // 前一项的next 指向新元素
                previous.next = node;
                // 下一个元素的 prev指向新元素
                current.prev = node;
                // 新元素的 prev指向上一个元素
                node.prev = previous;
            }
            length++;
            return true;
        }else{
            return false;
        }
    }

    this.removeAt = function(position){
        if(position>=0&&position<=length){
            var current = head;
            var previous;
            var index=0;

            if(position ===0){
                // 删除第一项
                // 重新定义head为current.next 跳过第一项current
                head = current.next;
                if(length ===1){
                    // 当只有一项时 删除后没有元素 tail指向null
                    tail =null;
                }else{
                    // 当删除一项后还有元素时，删除之后的 第一项(current.next) 也就是当前的head 的prev指向null
                    head.prev=null
                }
            }else if(position === length-1){
                // current定义为指向删除之前最后一项
                current = tail ;
                // 重新定义tail指向 删除之前最后一项的前一项(倒数第二项)
                tail =current.prev;
                // 删除后最后一项 next指向null
                tail.next = null;
            }else{
                while(index++<position){
                    previous = current;
                    current = current.next;
                }
                // 找到删除项 current 和删除项的前一项 previous

                // 把previous 和 current.next链接  就忽略了current
                previous.next = current.next;
                current.next.prev = previous;
            }
            length --;
            return current.element
        }else{
            return null
        }
    }
}