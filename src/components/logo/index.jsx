import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyle = makeStyles((theme) => ({
  image: {
    width: 38,
    height: 'auto',
    backgroundSize: 'contain'
  }
}))

function Logo({ withIcon = true }) {
  const classes = useStyle()

  return (
    <Link
      to="/"
      style={{ width: 'max-content', display: 'flex', alignItems: 'center' }}
    >
      <img
        className={classes.image}
        src="/static/logo/mntrixcontrol.png"
        alt="logo mntrixcontrol"
      />
      {withIcon && (
        <Typography
          color="textPrimary"
          style={{ margin: 0, paddingLeft: '0.2em' }}
          variant="h6"
          gutterBottom
        >
          Control
        </Typography>
      )}
    </Link>
  )
}

export default Logo
