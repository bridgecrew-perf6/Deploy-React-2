import PropTypes from 'prop-types'
import { alpha, makeStyles } from '@material-ui/core/styles'
import SimpleBarReact from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

const useStyle = makeStyles((theme) => ({
  rootStyle: {
    flexGrow: 1,
    height: '100%',
    overflow: 'hidden'
  },
  simpleBarReact: {
    height: 'inherit',
    minHeight: '100vh',
    '& .simplebar-scrollbar': {
      '&:before': {
        backgroundColor: alpha(theme.palette.primary.main, 0.48)
      },
      '&.simplebar-visible:before': {
        opacity: 1
      }
    },
    '& .simplebar-track.simplebar-vertical': {
      width: 10
    },
    '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
      height: 6
    },
    '& .simplebar-mask': {
      zIndex: 'inherit'
    }
  }
}))

Scrollbar.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object
}

export default function Scrollbar({ children, sx, className }) {
  const classes = useStyle()

  return (
    <div className={classes.rootStyle}>
      <SimpleBarReact className={classes.simpleBarReact}>
        {children}
      </SimpleBarReact>
    </div>
  )
}
