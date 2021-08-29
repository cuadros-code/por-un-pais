import { lazy } from 'react'
import { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const HomePage = lazy(() => import('../../pages/Home/HomePage'))
const AppBar = lazy(() => import('../../components/AppBar/AppBar')) 
const Login = lazy(() => import('../../pages/Auth/Login'))

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <AppBar />
        <Switch>
          <Route  
            path='/'
            exact
            component={HomePage}
          />
          <Route  
            path='/login'
            exact
            component={Login}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter
