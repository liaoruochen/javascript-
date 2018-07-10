//循环队列 击鼓传花

function Queue() {
    var items = []
    this.enqueue = function (element) {
        items.push(element);
    }
    this.dequeue = function () {
        return items.shift()
    }
    this.front = function () {
        return items[0];
    }
    this.isEmpty = function () {
        return items.length == 0;
    }
    this.size = function () {
        return items.length;
    }
    this.print = function () {
        console.log(items.toString());
    }
}

function hotpotato(nameList,num){
    var queue = new Queue();
    
    for(var i=0;i<nameList.length;i++){
        queue.enqueue(nameList[i]);
    }

    var eliminated = '';
    while(queue.size()>1){
        for (var i=0;i<num;i++){
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated +' out');
    }
    return queue.dequeue();
}

var names =['john','jack','camila','ingrid','carl'];
var winer =hotpotato(names,7);
console.log(winer)