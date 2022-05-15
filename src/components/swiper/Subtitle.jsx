import React from 'react'
import { Typography } from '@material-ui/core'
import { motion, AnimatePresence } from 'framer-motion'

function Subtitle({ state, children }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {state && (
        <Typography
          component={motion.h3}
          className="subtitle"
          variant="h3"
          color="primary"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.8 }}
        >
          {children}
        </Typography>
      )}
    </AnimatePresence>
  )
}

export default Subtitle
