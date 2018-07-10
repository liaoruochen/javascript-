// 优先队列
function PriorityQueue() {
    var items = [];
    function Queueelement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function (element, priority) {
        var queueelement = new Queueelement(element, priority);
        if (this.isEmpty()) {
            items.push(queueelement);
        } else {
            var added = false;
            for (var i = 0; i < items.length; i++) {
                if (queueelement.priority < items[i].priority) {
                    items.splice(i, 0, queueelement);
                    added = true;
                    break;
                }
            }
            if (!added) {
                items.push(queueelement);
            }
        }
    }
    this.isEmpty = function () {
        return items.length == 0;
    }
    this.print = function () {
        console.log(items);
    }

}

var priorityQueue = new PriorityQueue();
priorityQueue.enqueue('John', 2);
priorityQueue.enqueue('Jack', 5);
priorityQueue.enqueue('Camila', 1);
priorityQueue.print();
