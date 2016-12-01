# Angular1.x 基础教程分享

# Angular1.x  简介：

     AngularJS是一个前端JavaScript框架，背后有Google支持。这个框架最早是09年发布的，随后发展迅速，尤其是最近，流行度很高。
     和其他框架不同，AngularJS有很多独特的特性，使得其非常与众不同。如果你对AngularJS不了解，推荐先去其官网(http://www.angularjs.org)
    【需要翻墙】看看。不翻可以去（ http://www.apjs.net/ ），有很多例子。对于我来说，最吸引我的两个特性是双向绑定以及依赖注入。
     前者免去了开发时显示的刷新DOM，能让开发者更专注在逻辑上，而后者则使得测试以及集成变得非常方便。
   
# AngularJS 特性：

    
     一、MVC(MVVM)模式

     二、数据双向绑定

     三、指令

     四、模板

     五、服务和依赖注入
   
 # MVC(MVVM)模式
 
    MVC顾名思义：Model-view-Controll设计模式，其实这个有点类似于Java的思想，模型、视图、控制器的分离。但是Angular又有点不同于传统的MVC，
    严格意义上说它是MVVM（model-view-viewModel）。Model是简单的javascript对象；ViewModel是$scope对象，Angular依靠$scope检测状态
    变化；Controller负责设置初始状态和参数化$scope方法用以控制行为；View是Angular解析渲染后生成的HTML。
   
# MVC的核心是$scope

    » $scope是一个POJO(Plain Old JavaScript Object)
    » $scope提供了一些工具方法$watch()/$apply()
    » $scope是表达式的执行环境（或者叫作用域）
    » $scope是一个树型结构，与DOM标签平行
    » 子$scope对象会继承父$scope上的属性和方法 
    » 每一个Angular应用只有一个根$scope对象（一般位于ng-app上）
    » $scope可以传播事件，类似DOM事件，可以向上也可以向下
    » $scope不仅是MVC的基础，也是后面实现双向数据绑定的基础
    » 可以用angular.element($0).scope()进行调试
    
# 数据双向绑定

    这应该算Angular比较特有的属性，概括来说，Angular通过监听变量的变化来实现双向数据绑定。
    传统技术上，当model改变时，开发与人员需要手动处理DOM元素并将属性反映到变化中。
    而在Angular中，程序员可以轻轻松松解决这种问题，省掉了很多的代码。
    
# 指令(Directive)
   
    指令比较有意思，可以帮助我们做很多的DOM操作，比如增删改查都可以用指令完成。
    指令自带的link方法有三个参数：scope、element、attrs。通过这三个参数我们可以完成很多功能，
    如：获取对象，改变CSS，变量传递等，这也是我用的比较多的方法。
    
# 模板

     在AngularJS中，一个模板就是一个HTML文件。但是HTML的内容扩展了，包含了很多帮助你映射model到view的内容。
     »  HTML模板将会被浏览器解析到DOM中。
     »  DOM然后成为AngularJS编译器的输入。
     »  AngularJS将会遍历DOM模板来生成一些指导，即，directive（指令）。
     »  所有的指令都负责针对view来设置数据绑定。
   
# Angular的依赖注入实现
   
      » 每一个Angular应用都有一个injector
      » njector负责自动处理依赖关系、实例化对象
      » 对用户代码来说，injector是透明的
      » injector会自动分析函数签名，注入所需要的对象
      » inJector注入有三种方式： http://www.cnblogs.com/lodingzone/p/4895275.html
      » DI可以用在各种不同的地方，主要用在controller和factory中
       
        
   关于Angular的详细使用，请参考项目的ppt 和相应的代码，全部的指令使用方法。
