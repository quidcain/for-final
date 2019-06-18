import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import './no-cms.css';
import logo from './no-cms.png';

export default function() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  };

  const menu = (
    <List>
      {['Добавить сущность', 'Сущности', 'Элементы сущностей'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
  
  return (
    <>
      <img className="logo"
           src={logo}
           onClick={toggleDrawer(true)}/>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {menu}
      </Drawer>
    </>
  );
};
 
