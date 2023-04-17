import type { RouteRecordRaw } from 'vue-router';

type IRouteStructure = RouteRecordRaw & {
  text: string;
};

export const route_home: IRouteStructure = {
  text: '首頁',
  name: 'Home',
  path: '/',
  component: () => import('@/views/home/Index.vue'),
};
