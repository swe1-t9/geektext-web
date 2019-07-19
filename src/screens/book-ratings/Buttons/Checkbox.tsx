import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export default function CheckboxLabels(props:any) {
  const [state, setState] = React.useState({
    checkedA: false,
  });

  /*when checkbox is clicked, change to anon. when unchecked, change to user*/
  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [name]: event.target.checked });
    
    if(state.checkedA)
    {
      alert("Checkmark!");
    }
    else
    {
      alert("Unchecked");
    }
  };

  return ( 
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedA}
            onChange={handleChange('checkedA')}
            value="checkedA"
            color="primary"
          />
        }
        label="Remain Anonymous"
      />
  );
}
