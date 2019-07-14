import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [name]: event.target.checked });
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
