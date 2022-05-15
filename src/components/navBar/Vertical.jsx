import React from 'react'
import { matchPath, useLocation, useNavigate } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import navbarConfig from './navConfig'

const useStyles = makeStyles((theme) => ({
  nav: {
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 22,
    '& ul': {
      listStyle: 'none',
      display: 'flex',
      height: '100%',
      flexDirection: 'column',
      gap: 32,
      '& li': {
        color: theme.palette.common.black,
        margin: '0 12px',
        cursor: 'pointer',
        fontWeight: 'bolder',
        position: 'relative',
        height: '100%',
        alignItems: 'center',
        display: 'flex',
        '&::before': {
          content: '""',
          width: 4,
          top: 0,
          left: -37,
          height: 'inherit',
          background: theme.palette.common.black,
          display: 'block',
          position: 'absolute',
          opacity: 1,
          transition: '0.1s cubic-bezier(0, 0.38, 0.58, 1)'
        },
        '&:hover': {
          '&::before': {
            content: '""',
            width: 4,
            top: 0,
            left: -32,
            height: 'inherit',
            background: theme.palette.common.black,
            display: 'block',
            position: 'absolute',
            opacity: 1
          }
        },
        '&.actived': {
          '&::before': {
            content: '""',
            width: 4,
            top: 0,
            left: -32,
            height: 'inherit',
            background: theme.palette.common.black,
            display: 'block',
            position: 'absolute',
            opacity: 1
          }
        }
      }
    }
  }
}))

function Vertical() {
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

export default Vertical
