import React from 'react'
import { matchPath, useLocation, useNavigate } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import navbarConfig from './navConfig'
import { APPBAR_DESKTOP } from '../../constant'

const useStyles = makeStyles((theme) => ({
  nav: {
    padding: '0 20px',
    height: APPBAR_DESKTOP,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& ul': {
      listStyle: 'none',
      display: 'flex',
      height: '100%',
      '& li': {
        color: theme.palette.common.black,
        margin: '0 12px',
        cursor: 'pointer',
        fontWeight: 'bolder',
        position: 'relative',
        height: '100%',
        alignItems: 'center',
        display: 'flex',
        '&::after': {
          content: '""',
          height: 2,
          background: theme.palette.common.black,
          display: 'block',
          position: 'absolute',
          width: '100%',
          bottom: -2,
          opacity: 0,
          transition: '0.1s cubic-bezier(0, 0.38, 0.58, 1)'
        },
        '&:hover': {
          '&::after': {
            content: '""',
            height: 2,
            background: theme.palette.common.black,
            display: 'block',
            position: 'absolute',
            width: '100%',
            bottom: 0,
            opacity: 1
          }
        },
        '&.actived': {
          '&::after': {
            content: '""',
            height: 2,
            background: theme.palette.common.black,
            display: 'block',
            position: 'absolute',
            width: '100%',
            bottom: 0,
            opacity: 1
          }
        }
      }
    }
  }
}))

function Horizontal() {
  const classes = useStyles()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const match = (path) =>
    path ? !!matchPath({ path, end: true }, pathname) : false

  return (
    <nav className={classes.nav}>
      <ul>
        {navbarConfig.map((item) => {
          return (
            <li
              className={match(item.path) ? 'actived' : ''}
              onClick={() => navigate(item.path)}
            >
              {item.title}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Horizontal
