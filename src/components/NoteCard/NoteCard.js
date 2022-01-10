/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import { styled } from '@mui/material/styles';
import * as MUI from '@material-ui/core'
import * as MIcon from '@material-ui/icons'
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  test: {
    border: (note) => {
      if (note.category === 'money') {
        return '2px solid green'
      }
      if (note.category === 'work') {
        return '2px solid purple'
      }
      if (note.category === 'reminders' || note.category === 'reminder') {
        return '2px solid red'
      }
      if (note.category === 'todos') {
        return '2px solid blue'
      }
    }
  }
})

export default function NoteCard({ note, handleDelete }) {

  const classes = useStyles(note)

  return (
    <div>
     <MUI.Card elevation={3} className={classes.test}>
       <MUI.CardHeader
          // avatar={
          //   <Avatar sx={{ bgcolor: red[500] }} >
          //     R
          //   </Avatar>
          // }
          action={
            <MUI.IconButton onClick={() => handleDelete(note.id)}>
              <MIcon.DeleteOutlined />
            </MUI.IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <MUI.CardContent >
          <MUI.Typography variant="body2" color="textSecondary">
            {note.details}
          </MUI.Typography>
        </MUI.CardContent>

     </MUI.Card>
    </div>
  )
}
