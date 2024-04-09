import React from 'react'
import {
  Navigate,
  Route,
  Routes,
  useLocation
} from 'react-router-dom'
import { routerList } from './routerList'
import ROUTE_PATHS from './routesPath'
import getToken from '../utils/common.js'

const CustomRoutes = () => (
  <>
    <Routes>
      {
        routerList.map(({
          key, path, auth, exact, component: Component, redirectToHome
        }) => (
          <Route
            path={path}
            key={key}
            exact={exact}
            element={(
              <Validator redirectToHome={redirectToHome} auth={auth}>
                <Component />
              </Validator>
            )}
          />
        ))
      }
    </Routes>
  </>
)

const Validator = ({ children, redirectToHome, auth }) => {
  const token = getToken()
  const location = useLocation()

  if (auth && !token) {
    return <Navigate to={ROUTE_PATHS.SIGN_UP} state={{ from: location }} replace />
  }

  if (redirectToHome && token) {
    return <Navigate to={ROUTE_PATHS.HOME} />
  }

  return children
}

export default CustomRoutes
