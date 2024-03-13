import { lazy } from 'solid-js'
import type { RouteDefinition } from '@solidjs/router'

const Index = lazy(() => import('@/pages/index'))
const Errors = lazy(() => import('@/pages/errors/404'))

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Index
  },
  {
    path: '*',
    component: Errors
  }
]
