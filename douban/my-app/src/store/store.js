//引用
import Vue from 'vue'
import Vuex from 'vuex'

//设置中间件
Vue.use(Vuex)


//暴露
export let store =new Vuex.Store({
//state 表示vuex里面的数据源,我们需要保存的数据就在这里保存着,这里面的数据我们可取可拿可修改
  state:{
    obj:[
      {id:1,title:"我是赵飞1",connent:"我是一个美丽的姑娘1"},
      {id:2,title:"我是赵飞2",connent:"我是一个美丽的姑娘2"},
      {id:3,title:"我是赵飞3",connent:"我是一个美丽的姑娘3"},
    ]
  },
  // 由于getters是store对象当中的一个属性所以写的位置与state同级
  // 可以理解为vuex中的计算属性  -----》  不同组件对同一个数据取不同值的时候进行数据的处理
    getters:{
      newarr(state){
        // 生成的新变量名(state就是state这个属性){
        //     return 数据
        // }
        // 取出大于3的数据
        var newarr =state.obj.filter((v,i)=>{
          //进行过滤内容
            if(v.id>2){
              //将数值return 出去赋值newarr
              return v
            }
        })
        //再将得到的数据返回
        return newarr
      }
  },
  mutations:{
    chen(state){
      state.obj.forEach((v,i)=>{
          v.id++
      })
    }
  }
})
