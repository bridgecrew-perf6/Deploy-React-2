import React from 'react'
import { useNavigate } from 'react-router-dom'
import { makeStyles, ButtonBase, Typography } from '@material-ui/core'
import { ArrowForwardIos } from '@material-ui/icons'
import { motion } from 'framer-motion'
import { container, item, typo } from './variants'

const LEFT = 92

const useStyles = makeStyles((theme) => ({
  down: {
    borderRadius: '50%',
    position: 'absolute',
    bottom: '8em',
    left: LEFT,
    display: 'flex',
    color: theme.palette.background.paper,
    alignItems: 'center',
    justifyContent: 'center'
  },
  p: {
    padding: '0 1em'
  }
}))

function Down() {
  const classes = useStyles()
  let navigate = useNavigate()

  return (
    <ButtonBase
      component={motion.button}
      variants={container}
      initial="hidden"
      animate="show"
      className={classes.down}
      onClick={() => navigate('discover')}
    >
      <ArrowForwardIos variants={item} component={motion.svg} color="primary" />
      <ArrowForwardIos
        variants={item}
        component={motion.svg}
        color="primary"
        style={{ fontSize: 26 }}
      />
      <ArrowForwardIos
        variants={item}
        component={motion.svg}
        color="primary"
        style={{ fontSize: 28 }}
      />
      <Typography
        className={classes.p}
        variant="body1"
        component={motion.span}
        color="primary"
        variants={typo}
      >
        Start now
      </Typography>
    </ButtonBase>
  )
}

export default Down
