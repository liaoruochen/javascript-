// 栈  是一种遵从 后进先出(LIFO)原则的有序集合。 新添加或者待删除的元素都保存在栈的末尾(栈顶) 另一端就叫(栈底)
// 新元素都靠近栈顶，旧元素都靠经栈底
// 栈顶也就是栈的末尾

    // 栈的构建
    function Stack () {
        // 选择数组来保存栈里的元素
        var items = [];
        // this.push方法: 添加一个(或几个)新的元素到栈顶 使用了数组的push 方法把element push到栈顶
        this.push = function(element){
            items.push(element);
        }
        // this.pop方法: 移除栈中的元素，由于栈遵从后进先出，所以可以使用数组的pop方法把栈顶的元素移除 并返回该值
        this.pop = function(){
           return items.pop();
        }
        // 只能用push 或者 pop 方法添加或者删除栈中的元素 这样才能遵从LIFO原则(后进先出)

        // this.peek方法: 返回栈顶的元素
        this.peek = function(){
            return items[items.length-1];
        }
        // this.isEmpty方法 如果栈为空返回true 不为空则返回false
        this.isEmpty = function(){
            return items.length == 0;
        }
        // this.size方法 返回栈中元素个数,和数组中的length相似,对于集合,最好用size代替length,
        this.size = function(){
            return items.length
        }
        // this.clear方法 清空栈中所有元素(也可以多次调用clear方法)
        this.clear = function(){
            items = [];
        }
        // this.print方法,把栈中所有的元素输出到控制台
        this.print = function(){
            console.log(items.toString())
        }
    }

    // 使用Stack类

    // 初始化
    var stack = new Stack();
    // console.log(stack.isEmpty()) //栈中没用东西 所以输出 true

    // 向栈中添加元素
    stack.push(5);
    stack.push(8);
    // 调用peek方法
    // console.log(stack.peek()); //输出8   因为8是往栈中添加的最后一个元素s

    stack.push(11);
    // console.log(stack.size()); //输出3  此时栈内元素有 5 8 11 所以size为3
    // console.log(stack.isEmpty()); // false  此时栈内已有元素

    stack.push(15);
    stack.pop();
    stack.pop();
    // console.log(stack.size()) //输出2 添加了一个15后又连续删除了两次，所以size为2
    // stack.print(); //输出 5,8



    // 栈实例  十进制转二进制

    function divideBy2(decNumber){
        var remStack = new Stack();
        var rem ;
        var binaryString = ''
        // 入栈
        while(decNumber>0){
            rem = Math.floor(decNumber%2);
            remStack.push(rem);
            decNumber = Math.floor(decNumber/2)
        }
        // 出栈
        while(!remStack.isEmpty()){
            binaryString += remStack.pop().toString();
        }
        return binaryString;
    }

    // console.log(divideBy2(10)) //1010
    // console.log(divideBy2(233)) //11101001
    // console.log(divideBy2(1000)) //1111101000




    function baseConverter(decNumber,base){
        var remStack = new Stack();
        var rem ;
        var baseString = '';
        var digits = '0123456789ABCDEF'
        // 入栈
        while(decNumber>0){
            rem = Math.floor(decNumber%base);
            remStack.push(rem);
            decNumber = Math.floor(decNumber/base);
        }
        // 出栈
        while(!remStack.isEmpty()){
            baseString += digits[remStack.pop()]
        }
        return baseString;
    }
    // console.log(baseConverter(8,8)) // 8转换为8进制  结果为10
    // console.log(baseConverter(2,2)) // 2转换为2进制  结果为10
    // console.log(baseConverter(16,16)) // 16转换为16进制  结果为10
