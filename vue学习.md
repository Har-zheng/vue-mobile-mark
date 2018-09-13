#####  vue  关注数据层   mvvm  es6语法 

    v-for="(item, idex) of list   "  item 值  index 索引值  （in of）    v-model v-on：click 绑定方法   v-bind：  绑定数据   v-if=""   v-show="" 区别fasle  dome不存在

    v-show 隐藏 dom依旧存在      v-else紧贴v-if一起写 v-else-if

    {{ 插值 }}
##### 组件 父组件 子组件

    父传子 v-bind：model   接受 props：['props']

    $emit vue 子传父  通过事件传递

    钩子函数

    计算属性 computed 缓存  计算属性的 setter (set   ) 和 getter (get   )

    侦听属性 watch

    vue中样式绑定 v-bind：class = '{}或者[]' 对象和数组绑定  (三目运算)   v-bind：style
#####  改变vue数据 几种方法
    push pop shift unshift splice sort  reverse 1 操作数组 变异方法    2 改变数据的引用

    vue中的set方法  数组[]  对象{}  set方法  实例上的方法 vm.$set  例： vue.set(vm.userInfo,"address","beijing")

    实例上的set vm.$set

#####    四,深入理解vue
*    4-1
*   1. is属性   组件 符合h5规范的嵌套   <tr is="组件名"></tr>
*   2. 其他子组件时   data： function（）{}  必须是个函数
*   3. ref = "引用的名字"  引用      this.$refs.hello  //  所有引用 获取dom节点 在子组件上 获取子组件的应用
*   4. $emit  监听事件  
######   4-2父子组件传值
```html
    父传子
    属性方式
    <counter :count="1"></counter>
    <counter :count="1"></counter>
    props：['count'],
    data： function(){
        return(){
            number: this.count
        }
    }
    template: '<div>{{ count }}</div>'
    单项数据流 父组件传递过来的内容 不可以直接修改  
    
    子传父
    <counter :count="1" @change="handleIncrase"></counter>
    <counter :count="1"></counter>
    <div> {{ total }} </div>
    var counter = {
        methods:{
            handleClikc: function(){
                this.number = this.number +2;
                this.$emit('change',2) //监听事件
            }
        }
    }
    var vm = new Vue({
        el: '#root',
        data: {
            total: 5
        },
        components:{
            counter: counter
        },
        methods: {
           handleIncrase: function(step){
               this.total += stop
           } 
        }
    })
```
######   4-3组件参数校验与非Props特性
    

```html
<div id = "root">
    <child content="hello world"></child>

</div>
    
<script>
    Vue.component('child',{
        props:{
            content: [ nuber,string ] 或者 { 
                type：string,
                required: true, //是否必传  
                default： "default value" // required 是false  并且 未传递参数 默认就显示default内容
                validator： function(value){ //自定义校验器
                    return (value.length>5) //要求长度必须大于5
                }
                 }   //传参数的约束
        },
        template: '<div>{{ content }}</div>'
    })

    var vm = new Vue({
        el: '#root'
    });
    非Props特性 
    父传子不接 子不可用  传递内容默认显示最外层dom上
</script>

```
######   4-4 给组件绑定原生事件
    @click.native 监听原生事件 // native
```html
<div id = "root">
    <child @click.native=""handleClick></child>

</div>
    
<script>
    Vue.component('child',{
        
        template: '<div @click="handleChildclick">{{ content }}>Click</div>',
        methods:{
            handleChildClick: function(){
                alert('child click')
                this.$emit('click')  //向外出触发
            }
        }
    })

    var vm = new Vue({
        el: '#root',
        methods: {
            handleClick: function(){
                alert('click')
            }
        }
    });
</script>

```
######   4-5 非父组件传值问题（Bus/总线/发布订阅模式/观察者模式）
*   vuex 
+   总线机制
```html
总线机制
<div>
    <child content ="dell"></child>
    <child content ="lee"></child>
</div>

<script>
Vue.prototype.bus = new Vue();  //  给Vue实例 绑定 Bus模式

    Vue.component('child',{
        data： function(){
            return{
                selfContent: this.content
            }
        }
        props:{
            content: String
        },
        template: '<div @click="handleClick">{{ content }}</div>',
        methods:{
            handleClick: function(){
                this.bus.$emit('change',this.content) // 绑定监听事件
            }
        },
        mounted: function(){
            var this_ =  this  // this作用域变化 保存this值
            this.bus.$on('change',function(msg){ //触发事件 监听事件
                this_.content = msg   //兄弟之间相互传值
            })
        }
    });
    var vm = new Vue({
        el: '#root'
    })
</script>
```
######   4-5 在Vue中使用插槽

```html
//插槽的使用场景
<div>
    <child>
        <p slot= 'header'>Dell</p> //插槽 传递dom  2具名插槽
    </child>
</div>

<script>
    Vue.component('child',{
        template: `<div>
                    <slot>默认内容</slot>
                    <slot name = 'header'>默认内容</slot>
                   </div>`,
    });
    var vm = new Vue({
        el: '#root'
    })
</script>
```
```html
// 作用域插槽
<div>
    <child>
        <child>
            <template slot-scope = "props"> //作用域插槽   必须以template开头和结尾的标签
                <li>{{ props.item }}--item</li>
            </template>
        </child>
    </child>
</div>

<script>
    Vue.component('child',{
        data： function(){
            return: {
                list: [1,2,3,4]
            }
        }
        template: `<div>
                    <ul>
                        <slot v-for= "item of list" :item= "item" >
                        </slot>
                    </ul>
                   </div>`,
    });
    var vm = new Vue({
        el: '#root'
    })
</script>
```
######   4-6 动态组件与v-once指令
```html
    <child-one v-if = "type=== 'child-one'"></child-one> //v-once  只存放内存一次降低内存消耗
    <div id="root">
    <component :is="type"></component>  //动态组件 
        <!-- <child-one v-if = "type=== 'child-one'"></child-one>
        <child-two v-if = "type=== 'child-two'"></child-two> -->
        <button @click="handleBtn">change</button>
    </div>
    <script>
        Vue.component("child-one",{
            template: '<div>child-one</div>'
        })
        Vue.component("child-two",{
            template: '<div>child-two</div>'
        })
        var vm = new Vue({
            el: '#root',
            data: {
                type:'child-one'
            },
            methods:{
                handleBtnClick: function(){
                    this.type = this.type === "child-one"?"child-two": "child-one"
                }
            }
        })
    </script>
```
###### 5-1 Vue中css动画原理
```html
    <div id="root">
        <transition name="fade"
            enter-active-class="animated swing" //动画引入   自定义使用
        >
            <div v-if= "show">hello world</div>
        </transition>
        
        <button @click= "handleClick">切换</button>
    </div>
    <script>
        var vm = new Vue({
            el: '#root'
        })
    </script>
```
###### 5-2 Vue中使用 animate.css 库
```html
<transition name="fade"
            enter-active-class="animated swing" //动画引入   自定义使用
        >
            <div v-if= "show">hello world</div>
            </transition>
``` 

###### 5-3 Vue中css同时使用过度和动画
```html
<transition name="fade"
            ：duration="{ enter: 5000, leave: 10000}" // 时长
            name="fade"
            appear
            enter-active-class="animated swing" //动画引入   自定义使用
            leave-active-class="animated shake fade-leave-active"
        >
            <div v-if= "show">hello world</div>
            </transition>
```
###### 5-4 Vue中的js动画与veloccity.js的结合

```html
<transition name="fade"
            ：duration="{ enter: 5000, leave: 10000}" // 时长
            name="fade"
            appear
            enter-active-class="animated swing" //动画引入   自定义使用
            leave-active-class="animated shake fade-leave-active"
        >
            <div v-if= "show">hello world</div>
            </transition>
```
###### 5-5 Vue中多个元素或组件的过度

```html
<style>

</style>
<transition mode="out-in" >
    <component :is="type"></component>
    <!-- <div v-if= "show" key= "hello">hello world</div>
    <div v-else=>bye world</div> -->
 </transition>
 <button @click="handleClick">toggle</button>
```
###### 5-6 Vue中列表过度
```html
<style>
    .v-enter, .v-leave-to{
        opacity: 0;
    }
    .v-enter-active, .v-leave-active{
        transition: opacity 1s;
    }
</style>
<div id="root">
    <transition-grop>
        <div v-for="(item,index) of list" :key="index">
            {{ item.title }}
        </div>
    </transition-grop>
    <button @click= "handleBtnClick">Add</button>
</div>
<script>
    var vm = new Vue({
        el: "#root",
        data: {
            list: []
        },
        methods:{
            handleBtnClick: function(){
                this.list.push({
                    id: count++,
                    thitle: "hello world"
                })
            }
        }
    })
</script>
```
###### 5-6 Vue动画封装
```html

<div id="root">
    <transition-grop>
        <div v-for="(item,index) of list" :key="index">
            {{ item.title }}
        </div>
    </transition-grop>
    <button @click= "handleBtnClick">Add</button>
</div>
<script>
    var vm = new Vue({
        el: "#root",
        data: {
            list: []
        },
        methods:{
            handleBtnClick: function(){
                this.list.push({
                    id: count++,
                    thitle: "hello world"
                })
            }
        }
    })
</script>
```
###### 6-1.git和码云的使用

####  生成/添加ssh公钥
+   命令行  
+   生成 sshkey  ssh-keygen -t rsa -C "xxxxx@xxxxx.com"  回车三次完成生成  ssh key 

+   获取到你的 public key  &nbsp; &nbsp; &nbsp; &nbsp;cat ~/.ssh/id_rsa.pub
####  vue项目代码结构介绍


####  单文件组件与Vue中的路由

####  多页应用件VS单页应用
+   多页应用 页面跳转 
+   优点：首屏时间块，seo效果好
+   缺点：页面切换慢
<br>
+ 单页应用
+ 优点：页面切换块
+ 缺点：首屏的时间稍慢，seo差
#### 首页header区域开发

#### 推荐组件开发
#### 周末游组件开发

  + git pull 更新
  + git checkout 分支名 //切换到分支
  + git checkout  master 切换到主枝干
  + git merge origin/index-swiper  新增的内容分支合并到本地分支
  + 



















