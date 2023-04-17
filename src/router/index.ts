import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { route_home } from './routerList';
// 配置路由信息
const routes: RouteRecordRaw[] = [
  {
    name: route_home.name,
    path: route_home.path,
    component: route_home.component!,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
