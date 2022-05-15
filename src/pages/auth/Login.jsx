import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Container,
  makeStyles,
  Typography,
  Link,
  styled,
  Paper
} from '@material-ui/core'
import Logo from '../../components/logo'
import { SignIn } from '../../components/formulaire'
import { Page as WithHelmet } from '../../components/page'
import { useResponsive } from '../../hooks'

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%'
  },
  form: {
    width: '100%',
    maxWidth: 480,
    minHeight: '100%',
    padding: theme.spacing(4, 6),
    margin: theme.spacing(4, 0),
    height: 'max-content',
    [theme.breakpoints.only('xs')]: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: 'absolute',
      maxWidth: '100%',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      borderRadius: 0,
      margin: theme.spacing(0, 0)
    }
  },
  logoContainer: {
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(2, 0, 2, 2)
  },
  logo: {
    color: theme.palette.common.white,
    fontSize: '1.5em'
  }
}))

const Page = styled(WithHelmet)((theme) => {})

function Login() {
  const classes = useStyle()
  const isTablette = useResponsive('up', 'md')

  return (
    <Container component={Page} title="Login" className={classes.root}>
      {isTablette && (
        <div className={classes.logoContainer}>
          <Logo className={classes.logo} />
        </div>
      )}
      <Paper className={classes.form}>
        {!isTablette && <Logo />}
        <Typography style={{ paddingTop: '1em' }} variant="h3" gutterBottom>
          Sign in
        </Typography>
        <Typography color="textSecondary" style={{ marginBottom: '2.5em' }}>
          New user?&nbsp;
          <Link
            variant="subtitle2"
            to="/register"
            underline="hover"
            component={RouterLink}
          >
            Create an account
          </Link>
        </Typography>
        <SignIn />
      </Paper>
    </Container>
  )
}

export default Login
