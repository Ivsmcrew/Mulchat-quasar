import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: async () => (await import('Shared/ui/layouts')).MainLayout,
    children: [{ path: '', component: async () => (await import('Pages/index-page')).IndexPage }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: async () => (await import('Pages/error-not-found')).ErrorNotFound,
  },
]

export default routes
