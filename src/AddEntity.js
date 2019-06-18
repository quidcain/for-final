import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

export default function() {
  const [name, setName] = useState();
  const [url, setUrl] = useState();
  
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Добавить сущность
      </Typography>
      <TextField
        label="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        margin="normal"
      />
      <TextField
        select
        label="Select"
        value={url}
        onChange={e => setUrl(e.target.value)}      
        helperText="Please select your currency"
        margin="normal"
      >
        {['orders', 'currencies', 'articles'].map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </Container>
  );
}
