import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import { handleTextChange } from '../../shared/text';
import { commit as commitAddShippingAddressMutation } from '../../graphql/mutations/AddShippingAddressMutation';

type Props = {
  handleClose: () => void;
  open: boolean;
};

const AddShippingAddressModalView: React.FC<Props> = ({
  open,
  handleClose
}) => {
  const classes = useStyles();

  const [addressLine1, setAddressLine1] = React.useState('');
  const [addressLine2, setAddressLine2] = React.useState('');
  const [addressLine3, setAddressLine3] = React.useState('');
  const [city, setCity] = React.useState('');
  const [region, setRegion] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [postalCode, setPostalCode] = React.useState('');

  const onSubmit = () => {
    commitAddShippingAddressMutation(
      {
        address_line_1: addressLine1,
        address_line_2: addressLine2,
        address_line_3: addressLine3,
        city,
        region,
        country,
        postal_code: postalCode
      },
      onSuccess,
      onFailure
    );
  };

  const onSuccess = () => window.location.reload();
  const onFailure = () => console.warn('error');

  return (
    <Modal open={open} onClose={handleClose}>
      <div className={classes.paper}>
        <Grid container spacing={2}>
          <TextField
            margin="normal"
            required={true}
            fullWidth={true}
            id="address-line-1"
            label="Address Line 1"
            name="address-line-1"
            onChange={e => handleTextChange(e, setAddressLine1)}
            autoFocus
          />
          <TextField
            margin="normal"
            required={true}
            fullWidth={true}
            id="address-line-2"
            label="Address Line 2"
            name="address-line-2"
            onChange={e => handleTextChange(e, setAddressLine2)}
            autoFocus
          />
          <TextField
            margin="normal"
            required={true}
            fullWidth={true}
            id="address-line-3"
            label="Address Line 3"
            name="address-line-3"
            onChange={e => handleTextChange(e, setAddressLine3)}
            autoFocus
          />
          <TextField
            margin="normal"
            required={true}
            fullWidth={true}
            id="city"
            label="City"
            name="city"
            onChange={e => handleTextChange(e, setCity)}
            autoFocus
          />
          <TextField
            margin="normal"
            required={true}
            fullWidth={true}
            id="region"
            label="Region (State)"
            name="region"
            onChange={e => handleTextChange(e, setRegion)}
            autoFocus
          />
          <TextField
            margin="normal"
            required={true}
            fullWidth={true}
            id="country"
            label="County"
            name="county"
            onChange={e => handleTextChange(e, setCountry)}
            autoFocus
          />
          <TextField
            margin="normal"
            required={true}
            fullWidth={true}
            id="postal-code"
            label="Postal Code"
            name="postal-code"
            onChange={e => handleTextChange(e, setPostalCode)}
            autoFocus
          />
        </Grid>
        <Button type="submit" color="primary" onClick={onSubmit}>
          Save
        </Button>
      </div>
    </Modal>
  );
};

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    outline: 'none',
    top: '15%',
    left: '37%'
  }
}));

export default AddShippingAddressModalView;
