import { forwardRef } from 'react'
import { Helmet } from 'react-helmet'
import { Box } from '@material-ui/core'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const variants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0 }
}

const Page = forwardRef(({ children, title = '', ...props }, ref) => (
  <Box
    ref={ref}
    {...props}
    component={motion.div}
    variants={variants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.5 }}
  >
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </Box>
))

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
}

export default Page
