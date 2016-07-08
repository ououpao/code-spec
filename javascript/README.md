#Javascript 规范

规范参考：
- [standard](https://github.com/feross/standard)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

此规范Eslint配置: [eslint.json](/eslint.json)

sublime注释工具: [DocBlockr](https://github.com/Warin/Sublime/tree/master/DocBlockr)

## <a name="contents">目录</a>

  1. [命名](#name)
  1. [初始化](#init) 
  1. [函数](#function)
  1. [循环](#loop)
  1. [属性访问](#prop)
  1. [注释](#comment)
  1. [代码风格](#style)

---

## <a name="name">命名</a>
- 常规变量命名为驼峰式命名。
    ```javascript
    // bad 
    var citytext = '北京';
    var is_number = false;
    var has_selectCity = true; 

    // good
    var cityText = '北京';
    var isNumber = false;
    var hasSelectCity = true;
    ```
- 使用同义词替换需要使用的保留字。
    ```javascript
    // bad
    var superman = {
      class: 'alien'
    };
    var superman = {
      klass: 'alien'
    };

    // good
    var superman = {
      type: 'alien'
    };
    ```
- 避免单字母命名。命名应具备描述性。
    ```javascript
    // bad
    function q() {
      // ...stuff...
    }

    // good
    function query() {
      // ..stuff..
    }
    ```
- 构造函数首字母大写。
    ```javascript
    // bad 
    var validate = function(el) {
        this.el = el;
        ...
    }; 
    // good
    var Validate = function(el) {
        this.el = el;
        ...
    };
    
    ```
- 使用下划线 _ 开头命名私有属性。
    ```javascript
    // bad
    this.__firstName__ = 'Panda';
    this.firstName_ = 'Panda';

    // good
    this._firstName = 'Panda';
    ```
- 使用`_this`来缓存当前作用域内`this`的引用。
    ```javascript
    // bad 
    function test() {
        var that = this;
        // var self = this;
        return function() {
            console.log(that)
        }
    }

    // good
    function test() {
        var _this = this;
        return function() {
            console.log(_this)
        }
    }
    ```
- `Boolean`类型的变量或属性以`is`/`has`开头。
    ```javascript

    // bad 
    var selected = false;
    var showCancel = false;
    var hotel = false;

    // good
    var isSelected = false;
    var isShowCancel = false;
    var hasHotel = false;

    ```
- 如果变量是`jquery`对象，变量名以`$`开头。
    ```javascript
    // bad
    var target = $('#target');
    // good
    var $target = $('#target');
    ```

**[⬆ 回到顶部](#contents)**

## <a name="init">初始化</a>
- 使用`{}`初始化对象字面量
    ```javascript
    // bad
    var obj = new Object();

    // good
    var obj = {};
    ```
    - 使用`[]`初始化数组
    ```javascript
    // bad
    var obj = new Array();

    // good
    var obj = [];
    ```

**[⬆ 回到顶部](#contents)**

## <a name="function">函数</a>
- 函数体避免过大，可拆分成几个职责清晰的单一函数(单一职责原则)。
    ```javascript
    // bad 
    function render() {
        // 一大坨渲染列表的代码
        ...
        // 一大坨渲染公告的代码
        ...
    };
    // good
    function render() {
        renderList();
        renderNotice();
    };
    function renderList() {
        // 渲染列表
    };
    function renderNotice(){
        // 渲染公告
    };
    ```
- 函数参数避免过多，当参数大于3个或参数中有`boolean`类型的值时，全部参数或可选参数使用配置对象代替。
    ```javascript
    // bad 
    function showDialog(el, data, target, className, isShowClose) {
        ....
    };

    // good
    function showDialog(option) {
        ....
    };
    showDialog({
        el: '#el', 
        target:: '#target', 
        className: 'className', 
        isShowClose: true
    });
    ```
- 立即执行函数使用()来包裹，避免返回不必要的值。
    ```javascript
    // bad 
    !function iife() {
        ...
    }(); // 返回true
    +function iife() {
        ...
    }(); // 返回NaN
    -function iife() {
        ...
    }(); // 返回NaN

    // good
    (function iife() {
        ...
    })();
    ```
- 使用对象字面量给构造函数的原型对象添加属性，并指定`constructor`。
    ```javascript
    // bad 
    var Dog = function() {
        ....
    };
    Dog.prototype.eat = function() {

    };
    Dog.prototype.sleep = function() {

    };
    Dog.prototype.bark = function() {

    };

    // good
    var Dog = function() {
        ....
    };
    Dog.prototype = {
        constructro: Dog,
        eat: function() {
        },
        sleep: function() {
        },
        bark: function() {
        }
    };
    ```
- 如果你需要存取函数时使用 `get`和 `set` 作为函数名前缀。
    ```javascript
    // bad
    dragon.age();
    dragon.ageGet();
    dragon.ageSet();

    // good
    dragon.getAge();
    dragon.setAge(25);
    ```
- 如果属性是布尔值，使用 `is` 或 `has` 作为函数名的前缀。
    ```javascript
    // bad
    if (!dragon.age()) {
      return false;
    }

    // good
    if (!dragon.hasAge()) {
      return false;
    }
    ```

**[⬆ 回到顶部](#contents)**

## <a name="loop">循环</a>
- 迭代数组对象时，缓存数组的长度大小;
    ```javascript
    var arry = [];
    var i;
    var len;

    // bad 
    for(i = 0; i < arry.length; i++){
        ...
    };
    // good
    for(i = 0, len = arry.length; i < len; i++){
        ...
    }
    ```
- 迭代聚合对象时，缓存当前值;
    ```javascript
    var arry = [];
    var i;
    var len;
    var current;

    // bad 

    for(i = 0, len = arry.length; i < len; i++){
        var name = arry[i].name;
        var age = arry[i].age;
        var sex = arry[i].sex;
    };
    // good
    for(var i = 0, len = arry.length; i < len; i++){
        current = arry[i];
        var name = current.name;
        var age = current.age;
        var sex = current.sex;
    };
    ```
- 在聚合对象中查找单个对象时，及时退出循环;
    ```javascript
    var arry;
    var i;
    var len;
    var targetId;
    // bad 
    for(i = 0, len = arry.length; i < len; i++){
        if(arry[i].id){
            ...
        }
    };
    // good
    for(i = 0, len = arry.length; i < len; i++){
        if(arry[i].id){
            ...
            break;
        }
    };
    ```
- 保持循环体清晰明了;
    ```javascript
    var arry = [];
    var i;
    var len;
    var current;

    // bad 
    for(var i = 0, len = arry.length; i < len; i++){
        if(...){
            // 一大坨逻辑
            ....
            ....
        }else{
            // 一大坨逻辑
            ....
            ....
        }
    };
    // good
    for(var i = 0, len = arry.length; i < len; i++){
        if(...){
            doSomething();
        }else{
            doAnotherthing();
        }
    };
    function doSomething() {
        ...
    };
    function doAnotherthing() {
        ...
    };
    ```

**[⬆ 回到顶部](#contents)**

## <a name="prop">属性访问</a>
- 使用 . 来访问对象的属性。
    ```javascript
    var luke = {
      jedi: true,
      age: 28
    };

    // bad
    var isJedi = luke['jedi'];

    // good
    var isJedi = luke.jedi;
    ```
- 当通过变量访问属性时使用中括号 []。
    ```javascript
    var luke = {
      jedi: true,
      age: 28
    };

    function getProp(prop) {
      return luke[prop];
    }

    var isJedi = getProp('jedi');
    ```

**[⬆ 回到顶部](#contents)**

## <a name="comment">注释</a>
- 函数描述注释。
    ```javascript
    /**
     * [testFunction description]
     * @param  {[type]} a [description]
     * @param  {[type]} b [description]
     * @param  {[type]} c [description]
     * @return {[type]}   [description]
     */
    function testFunction(a, b, c) {
    }
    ```
- 单行注释。
    ```javascript
    //bad 
    /* 初始化项目 */
    function init() {...}
    //初始化项目
    function init() {...}

    // good
    // 初始化项目
    function init() {...}
    ```
- 多行注释。
    ```javascript
    //bad 
    function init() {...}
    // 初始化项目
    // 并获取数据
    function init() {...}

    // good
    /* 
      初始化项目 
      并获取数据
    */
    function init() {...}
    ```

**[⬆ 回到顶部](#contents)**

## <a name="style">代码风格</a>
- 使用4格`tab`缩进。
    ```javascript
    // bad
    function test() {
      var name = 'naraku';
      switch(name){
        case 'haha':
          console.log(name);
          break;
      }
    };
    // good
    function test() {
        var name = 'naraku';
        switch(name){
            case 'haha':
            console.log(name);
            break;
        }
    };
    ```
- 使用单引号` '' `包裹字符串。
    ```javascript
    // bad
    var name = "Bob Parr";
    var fullName = "Bob " + this.lastName;

    // good
    var name = 'Bob Parr';
    var fullName = 'Bob ' + this.lastName;
    ```
- 使用 `var` 声明每一个变量。
    ```javascript
    // bad
    var items = getItems(),
        goSportsTeam = true,
        dragonball = 'z';

    // bad
    // （跟上面的代码比较一下，看看哪里错了）
    var items = getItems(),
        goSportsTeam = true;
        dragonball = 'z';

    // good
    var items = getItems();
    var goSportsTeam = true;
    var dragonball = 'z';
    ```
- 最后再声明未赋值的变量。当你需要引用前面的变量赋值时这将变的很有用。
    ```javascript
    // bad
    var i, len, dragonball,
        items = getItems(),
        goSportsTeam = true;

    // bad
    var i;
    var items = getItems();
    var dragonball;
    var goSportsTeam = true;
    var len;

    // good
    var items = getItems();
    var goSportsTeam = true;
    var dragonball;
    var length;
    var i;
    ```
- 使用大括号包裹所有的多行代码块。
    ```javascript
    // bad
    if (test)
      return false;

    // good
    if (test) return false;

    // good
    if (test) {
      return false;
    }

    // bad
    function () { return false; }

    // good
    function () {
      return false;
    }
    ```
- 把 else 放在 if 代码块关闭括号的同一行。
    ```javascript
    // bad
    if (test) {
      thing1();
      thing2();
    }
    else {
      thing3();
    }

    // good
    if (test) {
      thing1();
      thing2();
    } else {
      thing3();
    }
    ```
- 在大括号前放一个空格。
    ```javascript
    // bad
    function test(){
      console.log('test');
    }

    // good
    function test() {
      console.log('test');
    }

    // bad
    dog.set('attr',{
      age: '1 year',
      breed: 'Bernese Mountain Dog'
    });

    // good
    dog.set('attr', {
      age: '1 year',
      breed: 'Bernese Mountain Dog'
    });
    ```
- 在控制语句（if、while 等）的小括号前放一个空格。在函数调用及声明中，不在函数的参数列表前加空格。
    ```javascript
    // bad
    if(isJedi) {
      fight ();
    }

    // good
    if (isJedi) {
      fight();
    }

    // bad
    function fight () {
      console.log ('Swooosh!');
    }

    // good
    function fight() {
      console.log('Swooosh!');
    }
    ```
- 使用空格把运算符隔开。
    ```javascript
    // bad
    var x=y+5;
    var result=isOk?'ok':'no';

    // good
    var x = y + 5;
    var result = isOk ? 'ok' : 'no';
    ```
- 自增/自减运算符不需要隔开。
    ```javascript
    // bad
    var x = y ++;

    // good
    var x = y++;
    ```
- 使用三元运算符时，保证他们在同一行或者`?`,`:`单独一行不分开。
    ```javascript
    // bad
    var location = env.development ?
      'localhost' :
      'www.api.com';

    // good
    var location = env.development ? 'localhost' : 'www.api.com'

    var location = env.development
      ? 'localhost'
      : 'www.api.com';

    ```
- 使用行尾逗号。
    ```javascript
    // bad
    var story = [
        once
      , upon
      , aTime
    ];

    // good
    var story = [
      once,
      upon,
      aTime
    ];

    // bad
    var hero = {
        firstName: 'Bob'
      , lastName: 'Parr'
      , heroName: 'Mr. Incredible'
      , superPower: 'strength'
    };

    // good
    var hero = {
      firstName: 'Bob',
      lastName: 'Parr',
      heroName: 'Mr. Incredible',
      superPower: 'strength'
    };
    ```
- 去除额外的尾部逗号。
    ```javascript
    // bad
    var hero = {
      firstName: 'Bob',
      lastName: 'Parr',
      heroName: 'Mr. Incredible',
      superPower: 'strength',
    };
    var arry = ['a', 'b', 'c',]
    // good
    var hero = {
      firstName: 'Bob',
      lastName: 'Parr',
      heroName: 'Mr. Incredible',
      superPower: 'strength'
    };
    var arry = ['a', 'b', 'c']
    ```
- 在每一个语句后使用分号。
    ```javascript
    // bad
    (function () {
      var name = 'Skywalker'
      return name
    })()

    // good
    (function () {
      var name = 'Skywalker';
      return name;
    })();
    ```
