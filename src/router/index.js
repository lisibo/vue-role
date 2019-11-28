import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

export const constantRouter = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

export const asyncRouter = [
  {
    path: '/permission',
    name: 'permission',
    component: ()=>import('@/views/permission.vue'),
    meta:{
      btnPermission:['lsb']
    },
    children:[
      {
        path:'/permission/permission_1',
        name:'permission_1',
        meta:{
          role:['lsb','admin']
        },
        component:()=>import('@/views/permission_1.vue')
      },
      {
        path:'/permission/permission_2',
        name:'permission_2',
        meta:{
          role:['lsb','admin']
        },
        component:()=>import('@/views/permission_2.vue'),
        children:[
          {
            path:'/permission/permission_2/permission_2_1',
            name:'permission_2_1',
            meta:{
              role:['lsb','admin']
            },
            component:()=>import('@/views/permission_2_1.vue'),
            children:[
              {
                path:'/permission/permission_2/permission_2_1/permission_2_1_1',
                name:'permission_2_1_1',
                meta:{
                  role:['lsb','admin']
                },
                component:()=>import('@/views/permission_2_1_1.vue')
              }
            ]
          },
          {
            path:'/permission/permission_2/permission_2_2',
            name:'permission_2_2',
            meta:{
              role:['admin']
            },
            component:()=>import('@/views/permission_2_2.vue')
          },
          {
            path:'/permission/permission_2/permission_2_3',
            name:'permission_2_3',
            meta:{
              role:['lsb','admin']
            },
            component:()=>import('@/views/permission_2_3.vue')
          }
        ]
      },
      {
        path:'/permission/permission_3',
        name:'permission_3',
        meta:{
          role:['admin']
        },
        component:()=>import('@/views/permission_3.vue')
      },
    ]
  },
  {
    path: '/aaa',
    name: 'aaa',
    meta:{
      btnPermission:['hbr']
    },
    component: ()=>import('@/views/aaa.vue'),
    children:[
      {
        path: 'eee',
        name: 'eee',
        meta:{ 
          role:['hbr']
        },
        component: ()=>import('@/views/eee.vue'),
      }
    ]
  },
  {
    path: '/bbb',
    name: 'bbb',
    component: ()=>import('@/views/bbb.vue'),
    children:[
      {
        path: '/bbb/bbb_1',
        name: 'bbb_1',
        component: ()=>import('@/views/bbb_1.vue'),
        children:[
          {
            path: '/bbb/bbb_1/bbb_1_1',
            name: 'bbb_1_1',
            component: ()=>import('@/views/bbb_1_1.vue'),
          }
        ]
      },
      {
        path: '/bbb/bbb_2',
        name: 'bbb_2',
        meta:{
          role:['lsb']
        },
        component: ()=>import('@/views/bbb_2.vue')
      },
      {
        path: '/bbb/bbb_3',
        name: 'bbb_3',
        meta:{
          role:['lsb','hbr']
        },
        component: ()=>import('@/views/bbb_3.vue')
      }
    ]
  },
  {
    path: '/ccc',
    name: 'ccc',
    meta:{
      btnPermission:['lsb','hbr']
    },
    component: ()=>import('@/views/ccc.vue')
  },
  {
    path: '/ddd',
    name: 'ddd',
    meta:{
      btnPermission:['admin']
    },
    component: ()=>import('@/views/ddd.vue')
  },
  {
    path: '*',
    redirect:'/404',
    hidden:true,
    component: ()=>import('@/views/404.vue')
  }
]

const router = new VueRouter({
  routes:constantRouter
});

export default router;
