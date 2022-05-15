import { Box, Container, makeStyles, styled } from '@material-ui/core'
import { Page as WithHelmet } from '../../components/page'
import { APPBAR_MOBILE, APPBAR_DESKTOP } from '../../constant'

const useStyle = makeStyles(({ palette, breakpoints, spacing }) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: 'inherit',
    paddingTop: APPBAR_MOBILE,
    paddingLeft: 0,
    paddingRight: 0,
    overflow: 'hidden',
    [breakpoints.up('lg')]: {
      paddingTop: APPBAR_DESKTOP
    },
    background: palette.background.default
  },
  box: {
    minHeight: `calc(100vh - ${APPBAR_MOBILE}px)`,
    [breakpoints.up('lg')]: {
      minHeight: `calc(100vh - ${APPBAR_DESKTOP}px)`
    }
  }
}))

const Page = styled(WithHelmet)(() => {})

function LiveStreams() {
  const classes = useStyle()

  return (
    <Container
      component={Page}
      title="Live streams"
      className={classes.root}
      maxWidth
    >
      <Box className={classes.box}>hello live streams</Box>
    </Container>
  )
}

export default LiveStreams
