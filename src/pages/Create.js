/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react'
import './Create.css'

import { useNavigate } from 'react-router-dom'

import * as MUI from '@material-ui/core'
//import SendIcon from '@material-ui/icons/Send'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

import { makeStyles } from '@material-ui/core'
import useFetch from '../hooks/useFetch';

// use '{' and '}' if you are DESTRUCTURING a function FROM a component or library

const useStyles = makeStyles({
  // creatae classes and rules here
  btn: {
    fontSize: 16,
    backgoundColor: 'blue',
    float: 'left',
    position: 'relative',
    top: '180px',
    right: '250px',
    '&:hover' : {
      backgroundColor: 'darkBlue'
    }
  },
  title: {
    //textDecoration: 'underline',
    marginBottom: '20px'
  }
});

// Begin page function
const Create = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('money')

  const { postData, data } = useFetch('http://localhost:8000/notes', 'POST' )
  const navigate = useNavigate();

  const classes = useStyles({
    field: {
      paddingTop: 20,
      marginBottom: 20,
      display: 'block'
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title === '') {
      setTitleError(true)
    }
    if (details === '') {
      setDetailsError(true)
    }
    if (title && details) {
      setTitleError(false)
      setDetailsError(false)

      // submit form
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {"content-type" : "application/json"},
        body: JSON.stringify({ title, details, category })
      })
        .then(() => {
          navigate('/notes')
      })
    }
  }


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

      <form
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit}
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
      >
        <MUI.TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          color='secondary'
          label="Note Title"
          name="email"
          autoComplete="title"
          className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
          id="outlined-basic"
        />
        <MUI.TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          multiline
          rows={4}
          color='secondary'
          label="Details"
          className={classes.field}
          onChange={(e) => setDetails(e.target.value)}
          error={detailsError}
        />

        <div className='form-control'>
          <MUI.FormControl >
            <MUI.FormLabel>Note Category</MUI.FormLabel>
            <MUI.RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
              <MUI.FormControlLabel value="money" control={<MUI.Radio />}  label="Money" />
              <MUI.FormControlLabel value="todo" control={<MUI.Radio />}  label="Todos" />
              <MUI.FormControlLabel value="reminder" control={<MUI.Radio />}  label="Reminder" />
            </MUI.RadioGroup>
          </MUI.FormControl>
        </div>

        <MUI.Button
          className={classes.btn}
          type='submit'
          color="secondary"
          variant='contained'
          endIcon={<KeyboardArrowRightIcon />}
        >Submit
        </MUI.Button>
      </form>
    </MUI.Container>
  )
}
export default Create;
