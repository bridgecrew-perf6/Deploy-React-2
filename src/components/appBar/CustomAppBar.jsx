import React from 'react'
import { AppBar, Toolbar, IconButton, Box } from '@material-ui/core'
import { Menu, Search } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { SearchBar } from '../searchBar'
import { Horizontal as NavBar } from '../navBar'
import { useResponsive } from '../../hooks'
import Logo from '../logo'
import { DRAWER_WIDTH, APPBAR_MOBILE, APPBAR_DESKTOP } from '../../constant'

const RootStyle = withStyles(({ palette, breakpoints }) => ({
  root: ({ isLoggedIn, isElevate, isBordered }) => ({
    /*  boxShadow: '0 0 4px 3px rgb(0 0 0 / 5%)', */
    boxShadow: isElevate ? 'rgb(0 0 0 / 20%) 0px -2px 6px' : 'none',
    borderBottom: isBordered ? '1px solid #e1e1e1' : 'none',
    // backdropFilter: 'blur(2px)',
    // WebkitBackdropFilter: 'blur(2px)', // Fix on Mobile
    // backgroundColor: alpha(palette.background.paper, 0.71),
    backgroundColor:
      isElevate || isBordered
        ? palette.background.paper
        : palette.background.default,

    [breakpoints.up('lg')]: {
      /* isLogin boolean: true si on est authentifiers sinon false */
      width: isLoggedIn ? `calc(100% - ${DRAWER_WIDTH + 1}px)` : '100%'
    }
  })
}))((props) => <AppBar {...props} />)

const ToolbarStyle = withStyles(({ breakpoints, spacing }) => ({
  root: {
    minHeight: APPBAR_MOBILE,
    [breakpoints.up('lg')]: {
      minHeight: APPBAR_DESKTOP,
      padding: spacing(0, 5)
    }
  }
}))(Toolbar)
CustomAppBar.prototype = {
  onOpenDrawer: PropTypes.func
}

function CustomAppBar({
  onOpenDrawer,
  isLoggedIn = false,
  isElevate = false,
  isBordered = false,
  isStartPage = false,
  children
}) {
  const isMobile = useResponsive('only', 'xs')
  const isMiniDesktopOrTablette = useResponsive('between', '', 'sm', 'md')
  const upToDesktop = useResponsive('up', 'lg')

  return (
    <RootStyle
      isLoggedIn={isLoggedIn}
      isElevate={isElevate}
      isBordered={isBordered}
      isStartPage={isStartPage}
    >
      <ToolbarStyle>
        {!isStartPage ? (
          <>
            {upToDesktop && (
              <>
                <Logo />
                <NavBar />
                <Box style={{ flex: '1' }} />
                <SearchBar />
                <Box style={{ flex: '1' }} />
                {children}
              </>
            )}
            {!upToDesktop && (
              <>
                <IconButton
                  edge="start"
                  aria-label="open drawer"
                  onClick={() => onOpenDrawer()}
                >
                  <Menu />
                </IconButton>
                <Logo withIcon={false} />
              </>
            )}

            {/* box separator */}
            <Box style={{ flex: '1' }} />

            {isMiniDesktopOrTablette && <SearchBar />}

            {/* box separator */}
            <Box style={{ flex: '1' }} />
            <div style={{ display: 'flex', gap: 24 }}>
              {isMobile && (
                <IconButton edge="start" aria-label="open search bar">
                  <Search />
                </IconButton>
              )}
            </div>

            {/* <Profile /> */}
          </>
        ) : (
          <>
            <Logo />
            <Box style={{ flex: '1' }} />
            {children}
          </>
        )}
        {/* TODO: SearchBar */}
      </ToolbarStyle>
    </RootStyle>
  )
}

export default CustomAppBar
