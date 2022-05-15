import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { makeStyles, Button } from '@material-ui/core'
import { AppBar } from '../appBar'

const useStyle = makeStyles((theme) => ({
  rootStyle: {
    display: 'flex',
    height: '100vh',
    overflow: 'hidden'
  },
  mainStyle: {
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100vh',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  }
}))

function StartLayout() {
  const classes = useStyle()
  let navigate = useNavigate()

  return (
    <div className={classes.rootStyle}>
      <AppBar isStartPage>
        <div style={{ display: 'flex', gap: '1em' }}>
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
      <main className={classes.mainStyle}>
        <Outlet />
      </main>
    </div>
  )
}

export default StartLayout
