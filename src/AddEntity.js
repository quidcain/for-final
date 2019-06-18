import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './Select-fix.css';

const useStyles = makeStyles(theme => ({
  field: {
    display: 'block',
    width: 200
  },
  menu: {
    width: 200
  },
  center: {
    margin: '0 auto',
    width: 'fit-content'
  },
  button: {
    marginTop: 30
  }
}));


export default function() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    name: '',
    url: ''
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Добавить сущность
      </Typography>
      {/* <div className={classes.center}> */}
        <TextField
          label="Name"
          value={values.name}
          onChange={handleChange('name')}
          margin="normal"
          className={classes.field}
        />
        {/* </div> */}
        <TextField
          select
          label="URL"
          value={values.url}
          onChange={handleChange('url')}      
          helperText="Выберите URL"
          margin="normal"
          className={`${classes.field} fw`}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            }
          }}
        >
          {['/navigation', '/currencies', '/articles'].map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <Grid container justify="space-between"  spacing={2}>
          <Grid item>
            <TextField
              select
              label="Тип поля"
              value={values.type}
              onChange={handleChange('type')}      
              helperText="Выберите Тип"
              margin="normal"
              className={`${classes.field} fw`}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                }
              }}
            >
              {['Number', 'String', 'NavElem'].map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              label="Имя поля"
              value={values.address1}
              onChange={handleChange('address1')}
              margin="normal"
              className={classes.field}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" className={classes.button}>
              Удалить
            </Button>
          </Grid>
        </Grid>
        <Button variant="contained" className={classes.button}>
          Добавить
        </Button>
    </Container>
  );
}
