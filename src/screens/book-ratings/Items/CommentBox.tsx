import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const CommentBox = (props:any) => {
  const classes = useStyles();

  const [max_words] = 				React.useState(500);
	const [min_words] = 				React.useState(10);
	const [wordcountError,setError] = 	React.useState(false);

  const newText = (props: any) => (event: React.ChangeEvent<HTMLInputElement>) => {

			
 
	};

  return (
    <form className={classes.container} noValidate autoComplete="off">

      <TextField
        id="user comment"
        error = {wordcountError}
        label="What are your thoughts on this book?"
        multiline 
        rows="10"
        defaultValue=" "
        className={classes.textField}
        margin="normal"
        fullWidth
        variant="filled"
        onChange={newText(props.commentText)}
      />
     
    </form>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
  }),
);

export default CommentBox;
