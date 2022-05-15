import React from 'react'
import { Outlet } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
  rootStyle: {
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden'
  },
  mainStyle: {
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    margin: 'auto',
    backgroundImage: 'url(/static/background/background_auth.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
}))

function AuthLayout() {
  const classes = useStyle()
  return (
    <main className={classes.mainStyle}>
      <Outlet />
    </main>
  )
}

export default AuthLayout
