import React from 'react';
import Bar from '../Items/ProgressBar';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const BookInfoComponent = (props:any) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        userRating: 4, //total of all ratings combined
        fivestar_total: 70,
        fourstar_total: 50,
        threestar_total: 50,
        twostar_total: 60,
        onestar_total: 80,
      });

        return(
            <div className={classes.scoreboard}>
            <Grid container spacing={2}>
            <Grid item xs={6}>
                <Bar rating= {state.fivestar_total} star = {5} />
            </Grid>
            <Grid item xs={2}>
                <Rater total = {5} rating={5} interactive={false}/> 
                <Paper className={classes.starNumbers} >{state.fivestar_total} ratings</Paper>
            </Grid>
          </Grid>
    
          <Grid container spacing={2}>
            <Grid item xs={6}>
                <Bar rating= {state.fourstar_total} star = {4} />
            </Grid>
            <Grid item xs={2}>
              <Rater total = {4} rating={4} interactive={false}/>
              <Paper className={classes.starNumbers} >{state.fourstar_total} ratings</Paper> 
            </Grid>
          </Grid>
    
          <Grid container spacing={2}>
            <Grid item xs={6}>
                <Bar rating= {state.threestar_total} star = {3} />
            </Grid>
            <Grid item xs={2}>
              <Rater total = {3} rating={3} interactive={false}/> 
              <Paper className={classes.starNumbers} >{state.threestar_total} ratings</Paper>
            </Grid>
          </Grid>
    
          <Grid container spacing={2}>
            <Grid item xs={6}>
                <Bar rating= {state.twostar_total} star={2} />
            </Grid>
            <Grid item xs={2}>
              <Rater total = {2} rating={2} interactive={false}/> 
              <Paper className={classes.starNumbers} >{state.twostar_total} ratings</Paper>
            </Grid>
          </Grid>
    
          <Grid container spacing={2}>
            <Grid item xs={6}>
                <Bar rating= {state.onestar_total} star={1}/>
            </Grid>
            <Grid item xs={2}>
              <Rater total = {1} rating={1} interactive={false}/>
              <Paper className={classes.starNumbers} >{state.onestar_total} ratings</Paper> 
            </Grid>
          </Grid>
    
          <Grid container spacing={2}>
            <Grid item xs={6}>
                <Paper className={classes.paper} >
                <Rater total = {5} rating={state.userRating} interactive={false}/>
                <br></br>
                Customers rating: {state.userRating} / 5 </Paper>
            </Grid>
          </Grid>
            </div> )
    
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    scoreboard: {
        marginTop: theme.spacing(10),
        marginLeft: '17%',
        width:600,
        height: 300,
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    starNumbers: {
      textAlign: 'center',
    }
  }),
);

export default BookInfoComponent;
