// 队列 是遵从FIFO(先进先出)原则的一组有序的项 
// 队列在尾部添加新元素，并从顶部移除元素，最新添加的元素必须排在队列的末尾


// 创建队列
function Queue() {
    // 选择数组来保存队列中的元素
    var items = []
    // this.enqueue(element)方法 向队列尾部添加一个或者多个新的项
    this.enqueue = function (element) {
        items.push(element);
    }
    // this.dequeue()方法 移除队列中的第一项(排在最前面的) , 并返回该元素
    this.dequeue = function () {
        return items.shift()
    }
    // 队列类中只用 enqueue 和 dequeue 方法来添加或者删除  这样就遵守了队列先进先出的原则

    // this.front()方法 返回队列中最前面的项
    this.front = function () {
        return items[0];
    }
    // this.isEmpty()方法 如果队列为空则返回true 否则 false
    this.isEmpty = function () {
        return items.length == 0;
    }
    // this.size()方法 返回队列长度
    this.size = function () {
        return items.length;
    }
    // this.print()方法 在控制台中输出队列
    this.print = function () {
        console.log(items.toString());
    }
}


// 使用Queue类

var queue = new Queue();
console.log(queue.isEmpty())  //true 刚实例的queue 还是空的

queue.enqueue('John');
queue.enqueue('Jack');
queue.enqueue('Camila');

queue.print(); // John,Jack,Camila 
console.log(queue.size()); // 3
console.log(queue.isEmpty());  // false

queue.dequeue();
queue.dequeue();

queue.print() //Camila



