import { lazy } from 'solid-js'
import type { RouteDefinition } from '@solidjs/router'

const Layout = lazy(() => import('@/layouts'))
const Index = lazy(() => import('@/pages/index'))
const Errors = lazy(() => import('@/pages/errors/404'))

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Index
      },
      {
        path: '/hi/:id',
        component: lazy(() => import('@/pages/hi/[id].tsx'))
      }
    ]
  },
  {
    path: '*',
    component: Errors
  }
]
