import { makeStyles, Typography, Button } from '@material-ui/core'

const useStyles = makeStyles(({ palette }) => ({
  header: {
    minHeight: 270,
    width: '100vw',
    backgroundImage: 'url(/static/assets/coverture.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1em',
    color: palette.background.paper,
    textAlign: 'center',
    padding: '0 40px',
    '& span': {
      fontWeight: 'bolder',
      fontSize: 18
    }
  }
}))

function Header() {
  const classes = useStyles()

  return (
    <header className={classes.header}>
      <Typography variant="h2">Creative Jobs</Typography>
      <Typography component="span" variant="body1">
        Discover your next career move, freelance gig, or internship
      </Typography>
      <Button
        variant="contained"
        color="primary"
        style={{ padding: '10px 12px 10px' }}
      >
        Post a job
      </Button>
    </header>
  )
}

export default Header
