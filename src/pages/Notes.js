/* eslint-disable no-unused-vars */
import { MuiThemeProvider } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import './Notes.css'
import * as MUI from '@material-ui/core'
import NoteCard from '../components/NoteCard/NoteCard';
import Masonry from 'react-masonry-css';

export default function Notes() {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/notes')
    .then(res => res.json())
    .then(data => setNotes(data))

  }, [])

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE'
    })

    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }

  return (
    <MUI.Container className='notes'>

      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map(note => (
          <div item key={note.id} xs={12} md={6} lg={4}>
            <NoteCard note={note} handleDelete = {handleDelete}/>
          </div>
        ))}
      </Masonry>

    </MUI.Container>
  )
}
