/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as DashIndexImport } from './routes/dash/index'

// Create Virtual Routes

const WorkspacesLazyImport = createFileRoute('/workspaces')()

// Create/Update Routes

const WorkspacesLazyRoute = WorkspacesLazyImport.update({
  path: '/workspaces',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/workspaces.lazy').then((d) => d.Route))

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DashIndexRoute = DashIndexImport.update({
  path: '/dash/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/workspaces': {
      preLoaderRoute: typeof WorkspacesLazyImport
      parentRoute: typeof rootRoute
    }
    '/dash/': {
      preLoaderRoute: typeof DashIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  WorkspacesLazyRoute,
  DashIndexRoute,
])

/* prettier-ignore-end */
