import { Box, Container, makeStyles, styled } from '@material-ui/core'
import React from 'react'
import { Page as WithHelmet } from '../../components/page'
import { GettingStarted as Swipper } from '../../components/swiper'
import Down from '../../components/down'
import { APPBAR_MOBILE, APPBAR_DESKTOP } from '../../constant'

const useStyle = makeStyles(({ breakpoints, spacing }) => ({
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
    background:
      'linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.1), #FFFFFF, #FFFFFF)'
  },
  box: {
    minHeight: `calc(100vh - ${APPBAR_MOBILE}px)`,
    [breakpoints.up('lg')]: {
      minHeight: `calc(100vh - ${APPBAR_DESKTOP}px)`
    }
  },
  text: {
    marginBottom: '0.5em',
    textAlign: 'center'
  }
}))

const Page = styled(WithHelmet)(() => {})

function GettingStarted() {
  const classes = useStyle()

  return (
    <Container
      component={Page}
      title="Getting started"
      className={classes.root}
      maxWidth
    >
      <Box className={classes.box}>
        <Swipper />
      </Box>
      <Down />
    </Container>
  )
}

export default GettingStarted
