import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  SwipeableDrawer,
  makeStyles,
  IconButton,
  Button,
  Box
} from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { ScrollBar } from '../scrollBar'
import { useResponsive } from '../../hooks'
import { Vertical as NavBar } from '../navBar'
import { DRAWER_WIDTH, APPBAR_DESKTOP } from '../../constant'

const useStyle = makeStyles((theme) => ({
  drawerPaper: {
    width: DRAWER_WIDTH
  }
}))

CustomDrawer.propTypes = {
  isOpenDrawer: PropTypes.bool,
  setIsOpenDrawer: PropTypes.func
}

function CustomDrawer({ isOpenDrawer, setIsOpenDrawer }) {
  const isDesktop = useResponsive('up', 'lg')
  const classes = useStyle()
  const { pathname } = useLocation()
  let navigate = useNavigate()

  const onCloseDrawer = () => {
    setIsOpenDrawer(false)
  }
  const onOpenDrawer = () => {
    setIsOpenDrawer(true)
  }

  useEffect(() => {
    if (isOpenDrawer) {
      onCloseDrawer()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <div>
      {!isDesktop && (
        <SwipeableDrawer
          open={isOpenDrawer}
          onClose={onCloseDrawer}
          onOpen={onOpenDrawer}
          classes={{ paper: classes.drawerPaper }}
        >
          <ScrollBar>
            <div
              style={{
                height: APPBAR_DESKTOP,
                padding: '5px 16px',
                justifyContent: 'space-between',
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <IconButton onClick={onCloseDrawer}>
                <Close />
              </IconButton>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('login')}
              >
                Log in
              </Button>
            </div>
            <NavBar />
            <Box style={{ height: 96, padding: '0 16px' }} />
            <Button
              style={{ margin: '0 28px' }}
              variant="outlined"
              color="default"
              onClick={() => navigate('register')}
            >
              Sign up
            </Button>

            <span
              style={{
                fontSize: 10,
                position: 'absolute',
                bottom: 0,
                left: 0,
                margin: '13px 30px'
              }}
            >
              By Fanomezantsoa Herifiandry Marc Nico
            </span>
          </ScrollBar>
        </SwipeableDrawer>
      )}
    </div>
  )
}

export default CustomDrawer
