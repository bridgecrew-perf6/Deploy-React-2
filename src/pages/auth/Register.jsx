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
import { SignUp } from '../../components/formulaire'
import { useResponsive } from '../../hooks'
import { Page as WithHelmet } from '../../components/page'
import Logo from '../../components/logo'

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
    margin: theme.spacing(2, 0),
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

const Page = styled(WithHelmet)(() => {})

function Register() {
  const classes = useStyle()
  const isTablette = useResponsive('up', 'md')

  return (
    <Container component={Page} title="Register" className={classes.root}>
      {isTablette && (
        <div className={classes.logoContainer}>
          <Logo className={classes.logo} />
        </div>
      )}
      <Paper className={classes.form}>
        {!isTablette && <Logo />}

        <Typography style={{ paddingTop: '1em' }} variant="h3" gutterBottom>
          Create an account
        </Typography>
        <Typography color="textSecondary" style={{ marginBottom: '2.5em' }}>
          Already have an account?&nbsp;
          <Link
            variant="subtitle2"
            to="/login"
            underline="hover"
            component={RouterLink}
          >
            Sign in
          </Link>
        </Typography>

        <SignUp />
      </Paper>
    </Container>
  )
}

export default Register
