// 散列表
// 散列算法的作用是尽快地在数据结构中找到一个值，之前的get方法需要遍历整个数据结构来找值，使用散列表函数就知道值的具体位置，因此可以快速检索奥该值，散列函数的作用是给定一个键值，然后返回在表中的地址


// 个人理解：
    // 散列表其实就是把传入的key值通过一个私有的散列函数转换为数字，从而作为内部数组下标，一个下标对应一个value

    // 创建一个散列表

    function HashTable(){
        var table = [];

        // 先定义一个散列函数 是HashTable中的一个私有方法
        var loseloseHashCode = function(key){
            var hash = 0;
            for(var i =0;i<key.length;i++){
                // charCodeAt()方法可返回指定位置的字符的 Unicode 编码。
                hash += key.charCodeAt(i);
            }
            return hash%37;
        }

        //向散列表增加一个新的项(也能更新列表)
        this.put = function(key,value){
            var position = loseloseHashCode(key);
            console.log(position+ '-' + key);
            table[position] = value
        }

        // get()方法返回根据键值搜索到的特定的值
        this.get = function(key){
            return table[loseloseHashCode[key]]
        }

        // remove() 方法根据键值从散列表中移除
        this.remove = function(key){
            table[loseloseHashCode(key)] = undefined
        }

        // 输出tabel数组
        this.table = function(){
            return table
        }

        // 在控制台中输出HashTable中的值
        this.print = function(){
            for(var i=0;i<table.length;i++){
                if(table[i] !== undefined){
                    console.log(i +':'+ table[i])
                }
            }
        }
    }

    var hash = new HashTable();
    hash.put('Gandalf','gandal@email.com')
    hash.put('John','johnsnow@email.com')
    hash.put('Tyrion','tyrion@email.com')

    console.log(hash.table())