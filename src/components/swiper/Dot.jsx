import React from 'react'
import { makeStyles } from '@material-ui/core'
import { motion } from 'framer-motion'

const useStyles = makeStyles(({ palette }) => ({
  active: {
    background: palette.primary.main
  },
  else: {
    background: palette.grey[500]
  }
}))
function Dot({ state, id, setState }) {
  const classes = useStyles()
  const handleClick = () => setState(parseInt(id))
  const isActive = state === parseInt(id)

  return (
    <motion.span
      onClick={handleClick}
      className={isActive ? classes.active : classes.else}
      id={id}
      animate={{ scale: isActive ? 1.2 : 0.8 }}
      transition={{ duration: 0.5 }}
    />
  )
}

export default Dot
