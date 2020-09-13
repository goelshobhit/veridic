import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 50,
  },
  margin: {
    margin: theme.spacing(1),
    color: 'white',
    fontSize: '48px',
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '50vw',
    position: 'fixed',
    marginBottom: 20,
    color: '#ffff',
  },
  input: {
    '& input:valid + fieldset': {
      borderColor: '#ffffff',
    },
    '& input:invalid + fieldset': {
      borderColor: '#ffffff',
    },
    '& input:valid:focus + fieldset': {
      padding: '4px !important', // override inline-style
      borderColor: '#ffffff',
    },
    borderRadius: 10,
    color: '#fff',
    height: 80,
    fontSize: 30,
    fontFamily: 'Open Sans',
    padding: 25,
    border: '3px solid #fff',
    width: '50vw',
  },
  floatingLabelFocusStyle: {
    color: '#ffffff',
  },
}));

export default function InputAdornments({ inputChange }) {
  const classes = useStyles();

  function handleChange(event) {
    inputChange(event.target.value);
  }

  function handleOnKeyPress(e) {
    if (e.key === 'Enter') {
      handleChange(e);
      // write your functionality here
    }
  }
  return (
    <div className={classes.root}>
      <Input
        label="Looking for some anime"
        placeholder="search here ..."
        onChange={handleChange}
        startAdornment={<InputAdornment position="start">😂</InputAdornment>}
        className={classes.input}
        variant="outlined"
        disableUnderline
        onKeyPress={handleOnKeyPress}
      />
    </div>
  );
}

InputAdornment.prototype = {
  ...InputAdornment,
};
