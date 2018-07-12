
// 字典
// 在字典中，存储的是[键,值]对[key,value]，其中键名是用来查询特定元素的。字典和集合很相似。字典也被称作 '映射'

    // 创建一个字典
    function Dictionary(){
        var items = {}


        // has(key)方法 如果键值存在于这个字典中的话 返回true 否则 false
        this.has = function(key){
            return key in items;
        }

        // set(key,value)方法 向字典中添加新元素
        this.set = function(key,value){
            items[key] = value;
        }

        // remove(key)方法 删除字典的一项
        this.remove = function(key){
            if(this.has(key)){
                delete items[key];
                return true
            }
            return false
        }

        // get(key) 通过键值查找一个特定的数值并返回
        this.get = function(key){
            // 如果字典中有这个键值则返回该键值对应的value 否则返回undefined
            return this.has(key)?items[key]:undefined
        }


        // values() 将字典所包含的所有数值以数组的形式返回
        this.values = function(){
            var values = [];
            for (var k in items){
                if(items.hasOwnProperty(k)){
                    values.push(items[k])
                }
            }
            return values
        }

        // keys()方法 将字典中包含的所有键值以数组的形式返回
        this.keys = function(){
            return Object.keys(items)
        }

        // clear()方法 清空字典
        this.clear = function(){
            items = {}
        }

        // size() 方法 返回字典的长度
        this.size = function(){
            return Object.keys(items).length
        }

        // getItems() 方法 返回字典
        this.getItems = function(){
            return items
        }
    }

    var dictionary = new Dictionary();

    dictionary.set('Gandalf','gandalf@qq.com')
    dictionary.set('Gandalf1','gandalf1@qq.com')
    dictionary.set('Gandalf2','gandalf2@qq.com')
    console.log(dictionary.keys())
    console.log(dictionary.values())
    console.log(dictionary.getItems())