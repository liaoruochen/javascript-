// 集合是由一组无序且唯一(不能重复)项组成的
// 可以把集合想象成一个既没有重复元素，也没有顺序概念的数组

    // 创建一个集合

    function Set () {
        // 我们用对象而不是用数组来表示集合
        // javascript对象不允许一个键指向两个不同的属性,保证了集合中元素是唯一的
        var items = {};

        // 判断集合中是否有该值，有的话返回true 否则返回false
        this.has = function (value){    
            // return value in items;
            return items.hasOwnProperty(value)
            // 所有javascript对象都有 hasOwnProperty方法。这个方法返回一个表明对象是否有特定属性的布尔值
        }
        
        // add方法 向集合中添加一个新的项
        this.add = function(value){
            if(!this.has(value)){
                items[value] = value;
                return true
            }else{
                return false
            }
        }

        // remove方法 从集合中移除一个值
        this.remove = function(value){
            if(this.has(value)){
                delete items[value];
                return true
            }else{
                return false
            }
        }

        // clear方法 移除集合中所有值
        this.clear =function(){
            items = {}
        }

        // size 方法 返回集合中有多少项
        this.size = function(){
            return Object.keys(items).length
            // keys方法 返回一个包含给定对象的所有属性数组
        }

        // values方法 返回一个包含给定对象的所有属性数组
        // 就是调用了Object.keys(items)
        this.values = function () {
            return Object.keys(items)
        }
    }

    var set = new Set();

    set.add(1);
    console.log(set.values()) //['1']
    console.log(set.has(1)) // true
    console.log(set.size()) // 1

    set.add(2);
    console.log(set.values()) //['1','2']
    console.log(set.has(1)) // true
    console.log(set.size()) // 2

    set.remove(1)
    console.log(set.values()) // ['2']
    
    set.remove(2)
    console.log(set.values()) // []


