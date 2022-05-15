import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(({ palette }) => ({}))

function List() {
  const classes = useStyles()

  return <div className={classes.joblist}>List</div>
}

export default List
