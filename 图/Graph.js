function Dictionary(){
        var items = {}
        this.has = function(key){
            return key in items;
        }
        this.set = function(key,value){
            items[key] = value;
        }
        this.remove = function(key){
            if(this.has(key)){
                delete items[key];
                return true
            }
            return false
        }
        this.get = function(key){
            return this.has(key)?items[key]:undefined
        }
        this.values = function(){
            var values = [];
            for (var k in items){
                if(items.hasOwnProperty(k)){
                    values.push(items[k])
                }
            }
            return values
        }
        this.keys = function(){
            return Object.keys(items)
        }
        this.clear = function(){
            items = {}
        }
        this.size = function(){
            return Object.keys(items).length
        }
        this.getItems = function(){
            return items
        }
    }

    
// 创建图类

    function Graph(){
        // 用一个数组来存储图中所有顶点的名字
        var vertices = [];
        // 用字典来存储邻接表 将使用顶点名字作为key 邻接顶点列表作为value。
        var adjList = new Dictionary();

        // addVertex方法  向图中添加新的顶点
        this.addVertex = function(v){
            // 数组的push方法把顶点加入
            vertices.push(v);
            // 实例化字典中的set方法 把v作为key value为空添加到字典中
            adjList.set(v,[])
        }

        // addEage方法 添加顶点之间的边
        this.addEage = function(v,w){
            // 实例化字典中的get方法通过输入的key找到对应的value
            adjList.get(v).push(w);
            adjList.get(w).push(v);
        }

        this.toString = function(){
            var s = '';

            for(var i=0;i<vertices.length;i++){
                s += vertices[i]+ '->';
                // vertices[i] 为字典的key 在用字典的get方法找到value,返回的value是一个数组
                var neighbors = adjList.get(vertices[i]);
                // 在遍历这个value的数组把值一个一个连接起来
                for (var j =0 ;j<neighbors.length;j++){
                    s += neighbors[j]+ ' '
                }
                // 换行
                s+= '\n';
            }
            return s
        }
    }


    var graph = new Graph();

    var myVertices = ['A','C','B','D','E','F','G','H','I'];
    for(var i =0; i<myVertices.length;i++){
        graph.addVertex(myVertices[i])
    }
    graph.addEage('A','B');
    graph.addEage('A','C');
    graph.addEage('A','D');
    graph.addEage('C','D');
    graph.addEage('C','G');
    graph.addEage('D','G');
    graph.addEage('D','H');
    graph.addEage('B','E');
    graph.addEage('B','F');
    graph.addEage('E','I');

    console.log(graph.toString())