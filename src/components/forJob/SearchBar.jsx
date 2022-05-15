import { useState } from 'react'
import {
  Paper,
  makeStyles,
  Input,
  InputAdornment,
  TextField,
  MenuItem
} from '@material-ui/core'
import { Search } from '@material-ui/icons'

const useStyles = makeStyles(({ palette }) => ({
  paper: {
    borderRadius: 0,
    position: 'sticky',
    top: 55,
    left: 0,
    right: 0,
    borderBottom: '1px solid #e1e1e1'
  }
}))

function SearchBar() {
  const classes = useStyles()
  const [text, settext] = useState('')

  return (
    <Paper elevation={0} className={classes.paper}>
      <CustumeInput text={text} settext={settext} />
    </Paper>
  )
}

function CustumeInput({ text, settext }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 15
      }}
    >
      <Input
        startAdornment={
          <InputAdornment position="start">
            <Search color="disabled" />
          </InputAdornment>
        }
        disableUnderline
        name="q"
        type="text"
        placeholder="Search jobs by ..."
        value={text}
        onChange={(e) => settext(e.target.value)}
        style={{
          borderRadius: 6,
          padding: '10px 0 10px 55px '
        }}
        fullWidth
      />
      <TextField
        style={{ width: 200 }}
        select
        value="all"
        variant="outlined"
        size="small"
      >
        <MenuItem key="all" value="all">
          All
        </MenuItem>
        <MenuItem key="full" value="full">
          Full Time
        </MenuItem>

        <MenuItem key="freelance" value="freelance">
          Freelance
        </MenuItem>
      </TextField>
    </div>
  )
}

export default SearchBar
