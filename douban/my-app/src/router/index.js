import Vue from 'vue'
import Router from 'vue-router'
//    1.当前引用起名字

import loGin from '../pages/loGin'
import zhuCe from '../components/zhuCe'
import doWn from '../components/doWn'
import hoMe from '../pages/home/hoMe'
import dianying from '../components/home/dianying'
import tushu from '../components/home/tushu'
import xiaozu from '../components/home/xiaozu'
import sousuo from '../components/home/sousuo'
import guangbo from '../components/home/guangbo'
import yingyuan from '../components/home/yingyuan'
import gengduo from '../components/home/gengduo'
import oumei from '../components/home/oumei'
import zhuomian from '../components/home/zhuomian'
import shiyong from '../components/home/shiyong'
import goodmoive from '../components/home/goodmoive'
import goodmoives from '../components/home/goodmoives'
import goodbooks from '../components/home/goodbooks'
import moiveclass from '../components/home/moiveclass'
import xiangqing from '../components/home/xiangqing'
import downapps from '../components/downapps'

import stores from '../components/store/stores'
import getters from '../components/store/getters'
import mutations from '../components/store/mutations'




Vue.use(Router)

export default new Router({
    //2.定义路由规则
  routes: [
    {
      path: '/home',
      name: 'hoMe',
      component: hoMe
    },
    {
      path: '/xiangqing/:id',
      name: 'xiangqing',
      component: xiangqing
    },
    {
      path: '/goodmoive',
      name: 'goodmoive',
      component: goodmoive
    },
    {
      path: '/goodmoives',
      name: 'goodmoives',
      component: goodmoives
    },
    {
      path: '/goodbooks',
      name: 'goodbooks',
      component: goodbooks
    },
    {
      path: '/moiveclass',
      name: 'moiveclass',
      component: moiveclass
    },
    {
      path: '/downapps',
      name: 'downapps',
      component: downapps
    },
    {
      path: '/login',
      name: 'loGin',
      component: loGin
    },
    {
      path:'/zhuce',
      name:'zhuCe',
      component:zhuCe
    },
    {
      path:'/down',
      name:'doWn',
      component:doWn
    },
    {
      path:'/dianying',
      name:'dianying',
      component:dianying
    },
    {
      path:'/tushu',
      name:'tushu',
      component:tushu
    },

    {
      path:'/guangbo',
      name:'guangbo',
      component:guangbo
    },
    {
      path:'/xiaozu',
      name:'xiaozu',
      component:xiaozu
    },
    {
      path:'/sousuo',
      name:'sousuo',
      component:sousuo
    },
    {
      path:'/yingyuan',
      name:'yingyuan',
      component:yingyuan
    },
    {
      path:'/gengduo',
      name:'gengduo',
      component:gengduo
    },
    {
      path:'/oumei',
      name:'oumei',
      component:oumei
    },
    {
      path:'/shiyong',
      name:'shiyong',
      component:shiyong
    },
    {
      path:'/zhuomian',
      name:'zhuomian',
      component:zhuomian
    },
    {
      path:'/stores',
      name:'stores',
      component:stores
    },
    {
      path:'/getters',
      name:'getters',
      component:getters
    },
    {
      path:'/mutations',
      name:'mutations',
      component:mutations
    },
  ]
})
