#Angular 最佳实践
---
参考：

* [angular-styleguide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)
* [angularjs-best-practices-directory-structure](https://scotch.io/tutorials/angularjs-best-practices-directory-structure)
* 
---

## <a name="contents">目录</a>

1. [项目结构](#project)
1. [项目规范](#spec)
1. [最佳实践](#best)

## <a name="name">项目结构</a>
- 标准结构(适用小型项目)
```javascript
app/
----- controllers/
---------- mainController.js
---------- otherController.js
----- directives/
---------- mainDirective.js
---------- otherDirective.js
----- services/
---------- userService.js
---------- itemService.js
----- js/
---------- bootstrap.js
---------- jquery.js
----- app.js
views/
----- mainView.html
----- otherView.html
----- index.html    
```
这是比较经典的项目结构，以类型分类，好处就是一看目录就知道里面是什么文件，当文件不多的时候也是容易查找阅读。但是，当每一个分类的文件都比较多的时候，不仅混乱难查找，也更难维护，理解修改成本较大。

- 更好的结构(适用中大型项目)
```javascript
app/
----- shared/   // acts as reusable components or partials of our site
---------- sidebar/
--------------- sidebarDirective.js
--------------- sidebarView.html
---------- article/
--------------- articleDirective.js
--------------- articleView.html
----- components/   // each component is treated as a mini Angular app
---------- home/
--------------- homeController.js
--------------- homeService.js
--------------- homeView.html
---------- blog/
--------------- blogController.js
--------------- blogService.js
--------------- blogView.html
----- app.module.js
----- app.routes.js
assets/
----- img/      // Images and icons for your app
----- css/      // All styles and style related files (SCSS or LESS files)
----- js/       // JavaScript files written for your app that are not for angular
----- libs/     // Third-party libraries such as jQuery, Moment, Underscore, etc.
index.html
```
这是以模块划分，组件化的概念的项目结构。同一个功能模块的相关文件都在一个文件夹内，一幕了然，职责清晰。这种结构可能对新手来说难理解一点，但随着对项目的熟悉，这种结构也会带来更大的工作效率。

## <a name="spec">项目规范</a>
请阅读：[Angular规范](https://github.com/johnpapa/angular-styleguide/blob/master/a1/i18n/zh-CN.md#%E6%89%8B%E5%8A%A8%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5)
## <a name="best">最佳实践</a>
