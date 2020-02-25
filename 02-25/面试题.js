
// 1.es6有哪些新特性?

// Let和const关键字
// 变量的解构赋值
// 字符串，数值的扩展
// 数组，对象的扩展
// 函数的扩展
// for...of

// 2.清除浮动的几种方法? (至少写 3种)

	// 额外添加一个空白标签 
	// 父级添加overflow:hidden;方法,
	// 使用after伪元素清除浮动
	// 使用before和after双伪元素清除浮动

// 3.CSS3有哪些新特性? (至少写出 3种)

// 1.CSS3实现圆角（border-radius），阴影（box-shadow），
// 2.对文字加特效（text-shadow、），线性渐变（gradient），旋转（transform）
// 3.transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg);// 旋转,缩放,定位,倾斜
// 4.增加了更多的CSS选择器 多背景 rgba
// 5.在CSS3中唯一引入的伪元素是 ::selection.
// 6.媒体查询，多栏布局
// 7.border-image

// 4.vue-router 有哪几种导航钩子?

// 全局导航钩子
// 单独路由独享钩子
// 组件内的钩子

// 5.Javascript 字符串操作函数有哪些?(至少写出3种)

// charAt(下标)
// lastIndexOf(字符串,[起始的位置])
// concat()
// slice()
// split()
//  replace(换谁, 换成啥)
//  trim()
//  link()

// 6.什么是跨域，如何实现跨域访问? (至少写出3种)

// 指的是浏览器不能执行其他网站的脚本。它是由浏览器的同源策略造成的，是浏览器施加的安全限制
// 解决方法:jsonp
// 		CORS（Cross-Origin Resource Sharing）,跨域资源共享
// 		代理跨域请求
// 		Html5 postMessage 方法
// 		修改 document.domain 跨子域
// 		基于 Html5 websocket 协议

// 7.请简述Vue的双向数据绑定原理是什么?

// 通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

// 8.闭包的3特性?

// 函数嵌套函数。
// 函数内部可以引用外部的参数和变量。
// 参数和变量不会被垃圾回收机制回收。

// 9.var numbers = [1,2,3,4];将numbers转换成“_”连接起来的字符串。

// var numbers = [1,2,3,4];
// numbers.join('-')

// 10.请详细说下你对vue生命周期的理解?

// beforeCreate:数据创建前
// created:数据创建后
// beforeMount:数据创建完成,但还没有渲染
// mounted:数据创建完成,渲染之后
// beforeUpdate:数据更新前
// updated:数据更新之后
// beforeDestroy:组件销毁之前
// destroyed:组件销毁之后

// 11.请说下vue组件间的传值?

// 父组件向子组件传递数据:子组件中通过定义props接收父组件中通过v-bind绑定的数据
// 子组件向父组件传递数据:父组件中通过监听子组件中$emit的自定义事件接收数据

// 12.浏览器本地存储有哪几种,区别是什么?

// sessionStorage，只会在窗口打开的时候才有效，一次性缓存会话，关闭浏览器自动释放
// localStorage，只要没有手动清除，就会一直保留，永久存储，以文件形式存储
// cookie,是用来跟踪用户信息的，默认只是一次性会话，维持到浏览器关闭
