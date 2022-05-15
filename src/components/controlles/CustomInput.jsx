import React from 'react'
import { Input, Paper } from '@material-ui/core'

function CustomInput({
  name = '',
  type = '',
  placeholder = '',
  text,
  settext,
  setfocused,
  ...props
}) {
  return (
    <Paper
      elevation={false}
      style={{
        padding: '0.4em',
        width: 468,
        margin: '1em'
      }}
    >
      <Input
        multiline={type === 'textarea'}
        disableUnderline
        name={name}
        type={type}
        placeholder={placeholder}
        value={text}
        onChange={(e) => settext(e.target.value)}
        onFocus={() => setfocused(true)}
        {...props}
      />
    </Paper>
  )
}

export default CustomInput
