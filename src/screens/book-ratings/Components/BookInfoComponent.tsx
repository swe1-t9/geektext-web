import React from 'react';
import Bar from '../Items/ProgressBar';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import Typography from '@material-ui/core/Typography';
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
            <Grid item xs={3}>
                <Typography variant="subtitle2" color="textSecondary">
                5 Stars </Typography>
            </Grid>
          </Grid>
    
          <Grid container spacing={2}>
            <Grid item xs={6}>
                <Bar rating= {state.fourstar_total} star = {4} />
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper} elevation={0}>4 stars</Paper>
            </Grid>
          </Grid>
    
          <Grid container spacing={2}>
            <Grid item xs={6}>
                <Bar rating= {state.threestar_total} star = {3} />
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper} elevation={0}>3 stars</Paper>
            </Grid>
          </Grid>
    
          <Grid container spacing={2}>
            <Grid item xs={6}>
                <Bar rating= {state.twostar_total} star={2} />
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper} elevation={0}>2 stars</Paper>
            </Grid>
          </Grid>
    
          <Grid container spacing={2}>
            <Grid item xs={6}>
                <Bar rating= {state.onestar_total} star={1}/>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper} elevation={0}>1 star</Paper>
            </Grid>
          </Grid>
    
          <Grid container spacing={2}>
            <Grid item xs={6}>
                <Paper className={classes.paper} >
                <Rater total = {5} rating={state.userRating} interactive={false}/>
                <br></br>
                This book has been rated a {state.userRating} / 5 </Paper>
            </Grid>
          </Grid>
            </div> )
    
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    scoreboard: {
        marginTop: theme.spacing(10),
        marginLeft: theme.spacing(55),
        width:600,
        height: 300,
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
  }),
);

export default BookInfoComponent;