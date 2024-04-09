import React, { Suspense } from 'react'
import CustomRoutes from './routes'

const Routes = () => {
  return (
      <Suspense fallback={
        <> Loading... </>
       }
      >
        <CustomRoutes />
      </Suspense>
  )
}


export default Routes
