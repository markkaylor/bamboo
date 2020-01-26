import Vue from 'vue' 
import Router from 'vue-router' 
import SignIn from '@/views/SignIn.vue'
import ProductList from '@/views/ProductList.vue'
import ProductShow from '@/views/ProductShow.vue'
import ProductCreate from '@/views/ProductCreate.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'sign-in',
      component: SignIn
    },
    {
      path: '/product/:id',
      name: 'product-show',
      component: ProductShow,
      props: true
    },
    {
      path: '/products',
      name: 'products',
      component: ProductList
    },
    {
      path: '/product-create',
      name: 'product-create',
      component: ProductCreate
    }
  ]
})