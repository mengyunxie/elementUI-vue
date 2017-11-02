import Vue from 'vue'
import Router from 'vue-router'

import home from '../page/home.vue';
import list from '../page/list/list.vue';
import article from '../page/article/article.vue';
import addArticle from '../page/addArticle/addArticle.vue';
import configure from '../page/configure/configure.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        redirect: '/home/list'
    }, {
        path: '/home',
        component: home,
        children: [{
            path: 'list',
            component: list
        }]
    }, {
        path: '/article',
        component: article
    }, {
        path: '/addArticle',
        component: addArticle
    }, {
        path: '/configure',
        component: configure
    }
  ]
})