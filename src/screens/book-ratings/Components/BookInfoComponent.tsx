import React from 'react';
import Bar from '../Items/ProgressBar';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


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
            <div>
                 
                <div className={classes.ratingInfo}>
                    <Rater total = {5} rating={state.userRating} interactive={false}/>
                    <br></br>
                    This book has been rated a {state.userRating} / 5 
                </div>

                <div className={classes.scoreboard}> 
                    <Bar rating= {state.fivestar_total} star = {5} />
                    <Bar rating= {state.fourstar_total} star = {4} />
                    <Bar rating= {state.threestar_total} star = {3} />
                    <Bar rating= {state.twostar_total} star={2} />
                    <Bar rating= {state.onestar_total} star={1}/>
                </div>
                
                <div className={classes.rateLabels}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        5 Stars <p></p>
                        4 Stars <p></p>
                        3 Stars <p></p>
                        2 Stars <p></p>
                        1 Stars
                    </Typography>
                </div>
            </div> )
    
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ratingInfo: {
        marginTop: theme.spacing(40),
        marginLeft: theme.spacing(55),
    },
    scoreboard: {
        marginTop: theme.spacing(-25),
        marginLeft: theme.spacing(55),
    },
    rateLabels: {
        marginTop: theme.spacing(-18),
        marginLeft: theme.spacing(95),
    }
  }),
);

export default BookInfoComponent;