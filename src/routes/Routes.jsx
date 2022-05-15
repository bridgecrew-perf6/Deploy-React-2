import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { AuthLayout, StartLayout, Layout } from '../components/layout'
import { GettingStarted } from '../pages/start'
import { Login, Register } from '../pages/auth'
import Discover from '../pages/discover'
import LiveStreams from '../pages/livestreams'
import Jobs from '../pages/jobs'
import NotFound from '../pages/404'
import { CssBaseline } from '@material-ui/core'
import MapComponent from '../components/map/MapComponent'
import { MapAllSelect } from '../components/map'
import MapForm  from '../components/map/MapForm'
import ProtectedRouter  from './ProtectedRouter'



function AllRoutes() {
  return (
    <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartLayout />}>
            <Route index element={<GettingStarted />} />
          </Route>

          <Route path="/" element={<Layout />}>
            <Route path="discover" element={<Discover />} />
            <Route path="livestreams" element={<LiveStreams />} />
            <Route path="jobs" element={<Jobs />} />
          </Route>


          <Route path="/" element={<ProtectedRouter />}>
              <Route path="map"element={<MapForm />}/>
          </Route>
         
        
          <Route path="/" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route path="/404" element={<AuthLayout />}>
            <Route index element={<NotFound />} />
          </Route>
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
        <CssBaseline />
      </BrowserRouter>
    </AnimatePresence>
  )
}

export default AllRoutes
