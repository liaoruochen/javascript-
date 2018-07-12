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



    //集合操作 
        // 并集：对于给定的两个集合，返回一个包含两个集合中所有元素的集合

        this.union = function(otherSet){
            // 创建一个新的集合，代表新产生的并集
            var unionSet = new Set();
            // 获取第一个集合(即当前的Set实例)的所有值

            // 因为集合中的元素不会重复。add方法会判断是否有相同值而选择添加
            var values = this.values();
            for(var i =0 ; i<values.length;i++){
                unionSet.add(values[i])
            }
            values = otherSet.values();
            for(var i = 0;i<values.length;i++){
                unionSet.add(values[i])
            }
            return unionSet;
        }

        // 交集：对于给定的两个集合，返回一个包含两个集合中共有元素的集合

        this.intersection = function(otherSet){
            // 实例一个集合 用于存两个集合交集的值
            var intersectionSet = new Set();

            var values = this.values();

            for(var i = 0 ; i<values.length ; i++){
                // 便利第一个集合所有的元素，如果在第二个集合中有的元素则添加到intersectionSet集合中
                if(otherSet.has(values[i])){
                    intersectionSet.add(values[i])
                }
            }
            return intersectionSet
        }

        // 差集：对于给定的两个集合，返回一个包含所有存在于第一个集合且不存在于第二个集合的元素的新集合

        this.difference =function(otherSet){
            // 实例一个集合，用来存两个集合差集的元素
            var differenceSet = new Set();

            var values = this.values;

            for(var i =0; i<values.length ; i++){
                // 便利第一个集合所有的元素，如果在第二个集合中没有的元素则添加到differenceSet集合中
                if(!otherSet.has(values[i])){
                    differenceSet.add(values[i])
                }
            }
            return differenceSet
        }

        // 子集：验证一个给定集合是否是另一个集合的子集

        this.subset = function(otherSet){
            if(this.size()>otherSet.size()){
                return false
            }else{
                var values = this.values();
                for(var i=0;i<values.length;i++){
                    if(!otherSet.has(values[i])){
                        return false
                    }
                }
                return true
            }
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




    var setA = new Set();
    setA.add(1);
    setA.add(2);

    var setB = new Set();
    setB.add(1);
    setB.add(2);
    setB.add(3);

    var setC = new Set();
    setC.add(2);
    setC.add(3);
    setC.add(4);

    console.log(setA.subset(setB))  // true
    console.log(setA.subset(setC))  // false

    
