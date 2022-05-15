import { useState } from 'react'
import { makeStyles, Button } from '@material-ui/core'
import { Outlet, useNavigate } from 'react-router-dom'
import { AppBar } from '../appBar'
import { Drawer } from '../drawer'

const useStyle = makeStyles((theme) => ({
  rootStyle: {
    display: 'flex',
    height: '100vh',
    overflow: 'hidden'
  },
  mainStyle: {
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100vh'
  }
}))

function Layout() {
  const classes = useStyle()
  let navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={classes.rootStyle}>
      <AppBar isBordered onOpenDrawer={() => setIsOpen(true)}>
        <div
          style={{
            display: 'flex',
            gap: '1em',
            position: 'absolute',
            right: 0,
            margin: 40
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('login')}
          >
            Log in
          </Button>
          <Button
            variant="text"
            color="default"
            onClick={() => navigate('register')}
          >
            Sign up
          </Button>
        </div>
      </AppBar>

      <Drawer isOpenDrawer={isOpen} setIsOpenDrawer={setIsOpen} />

      <main className={classes.mainStyle}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
