/* eslint-disable no-unused-vars */
import { makeStyles } from "@material-ui/core";
import React from "react"
import * as MUI from '@material-ui/core'
import * as MIcon from '@material-ui/icons'
import { useLocation, useNavigate } from "react-router-dom";
import { format } from "date-fns";

const drawerWidth = 240;

// styling for mui elements
const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3)
    },
    drawer: {
      width: drawerWidth
    },
    drawerPaper: {
      width: drawerWidth
    },
    root: {
      display: 'flex'
    },
    active: {
      background: '#f4f4f4'
    },
    title: {
      padding: theme.spacing(2)
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px )`
    },
    toolbar: theme.mixins.toolbar,
    date : {
      flexGrow: 1
    },
    avatar: {
      marginLeft: theme.spacing(1)
    }
  }

})

const menuItems = [
  {
    text: 'My Notes',
    icon: <MIcon.SubjectOutlined color="secondary" />,
    path: '/notes'
  },
  {
    text: 'Create Note',
    icon: <MIcon.AddCircleOutlineOutlined color="secondary" />,
    path: '/create'
  }
]

export default function Layout({ children }) {

  const classes = useStyles()
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className={classes.root}>

      {/* app bar */}
      <MUI.AppBar
        className={classes.appBar}
        elevation={1}
      >
        <MUI.Toolbar>
          <MUI.Typography className={classes.date}>
            Today is the {format(new Date(), 'do')} day of {format(new Date(), 'MMM Y')}
          </MUI.Typography>
          <MUI.Typography>
            Mario
          </MUI.Typography>
          <MUI.Avatar src="/mario-av.png" className={classes.avatar}/>
        </MUI.Toolbar>
      </MUI.AppBar>

      {/* side drawer */}
      <MUI.Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <MUI.Typography variant="h5" className={classes.title}>
            Ninja notes
          </MUI.Typography>
        </div>

      {/* List-links */}
      <MUI.List>
        {menuItems.map(item => (
          <MUI.ListItem
            button
            key={item.text}
            onClick={() => navigate(item.path)}
            className={location.pathname === item.path ? classes.active : null}
          >
            <MUI.ListItemIcon>{ item.icon }</MUI.ListItemIcon>
            <MUI.ListItemText primary={item.text}/>
          </MUI.ListItem>
        ))}
      </MUI.List>

      </MUI.Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        { children }
      </div>

    </div>
  )
}
