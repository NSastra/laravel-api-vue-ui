import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/friends/Home.vue'
import Createfriends from '../views/friends/Createfriends.vue'
import Editfriends from '../views/friends/Editfriends.vue'
import Groups from '../views/groups/Index.vue'
import Detailfriends from '../views/friends/Detailfriends.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createfriends',
    name: 'friends.create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createfriends
  },
  {
    path: '/editfriends/:id',
    name: 'friends.edit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editfriends
  },
  {
    path: '/groups',
    name: 'groups.Index',
    component: Groups
  },
  {
    path: '/Detailfriends/:id',
    name: 'Detailfriends.Index',
    component: Detailfriends
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
