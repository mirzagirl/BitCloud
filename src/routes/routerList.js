import { lazy } from 'react'
import ROUTE_PATHS from './routesPath'
import { v4 as uuidv4 } from 'uuid'
import Home from '../screens/Home'
import SignUp from '../screens/SignUp'

// For private routes, add auth: true
// For redirecting to home page, add redirectToHome: true
export const routerList = [
  {
    key: uuidv4(),
    label: '/',
    path: ROUTE_PATHS.HOME,
    component: Home,
    exact: true,
    auth: true
  }, {
    key: uuidv4(),
    label: 'sign-up',
    path: ROUTE_PATHS.SIGN_UP,
    component: SignUp,
    exact: true,
    redirectToHome: true
  }, {
    key: uuidv4(),
    label: 'market',
    path: ROUTE_PATHS.MARKET,
    component: lazy(() => import('../screens/Market')),
    exact: true
  }
]

