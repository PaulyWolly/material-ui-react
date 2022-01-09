/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import './Create.css'

import * as MUI from '@material-ui/core'
//import SendIcon from '@material-ui/icons/Send'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

import { makeStyles } from '@material-ui/core'
// use '{' and '}' if you are DESTRUCTURING a function FROM a component or library

const useStyles = makeStyles({
  // creatae classes and rules here
  btn: {
    fontSize: 60,
    backgoundColor: 'violet',
    float: 'left',
    '&:hover' : {
      backgroundColor: 'red'
    }
  },
  title: {
    textDecoration: 'underline',
    marginBottom: '20px'
  }
});


export default function Create() {

  const classes = useStyles()

  return (
    <MUI.Container>
      <MUI.Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        align="left"
        noWrap
        gutterBottom
        className={classes.title}
      >
        Create a a New Note
      </MUI.Typography>

      <MUI.Button
        className={classes.btn}
        type='submit'
        color="primary"
        variant='contained'
        onClick={()=> console.log('you clicked me')}
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </MUI.Button>
    </MUI.Container>
  )
}
