import Vue from 'vue'
import VueRouter from 'vue-router'

import mainframe from '../pages/mainframe.vue'
import dataindex from '../pages/data/index.vue'
import dataoverview from '../pages/data/children/overview/overview.vue'
import citydata from '../pages/data/children/overview/citydata.vue'
import loupandata from '../pages/data/children/overview/loupandata.vue'
import systemindex from '../pages/system/index.vue'
import accountlist from '../pages/system/children/account/list.vue'
import accountadd from '../pages/system/children/account/add.vue'
import rolelist from '../pages/system/children/role/list.vue'
import roleadd from '../pages/system/children/role/add.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: mainframe,
    redirect: '/mainframe'
  },
  {
    path: '/mainframe',
    component: mainframe,
    name: 'mainframe',
    redirect: {name: 'dataindex'},
    children: [
      {
        path: 'dataindex',
        component: dataindex,
        name: 'dataindex',
        redirect: { name: 'dataoverview' },
        children: [
          {
            path: 'dataoverview',
            component: dataoverview,
            name: 'dataoverview'
          },
          {
            path: 'citydata',
            component: citydata,
            name: 'citydata'
          },
          {
            path: 'loupandata',
            component: loupandata,
            name: 'loupandata'
          }
        ]
      },
      {
        path: 'systemindex',
        component: systemindex,
        name: 'systemindex',
        redirect: { name: 'accountlist' },
        children: [
          {
            path: 'accountlist',
            component: accountlist,
            name: 'accountlist'
          },
          {
            path: 'accountadd',
            component: accountadd,
            name: 'accountadd'
          },
          {
            path: 'rolelist',
            component: rolelist,
            name: 'rolelist'
          },
          {
            path: 'roleadd',
            component: roleadd,
            name: 'roleadd'
          }
        ]
      }
    ]
  }
]

export let router = new VueRouter({
  routes
})
