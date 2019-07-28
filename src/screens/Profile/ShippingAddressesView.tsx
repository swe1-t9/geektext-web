import { createFragmentContainer } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import * as React from 'react';

import { ShippingAddressesView_shippingAddresses } from './__generated__/ShippingAddressesView_shippingAddresses.graphql';
import AddShippingAddressModalView from './AddShippingAddressModalView';

type Props = {
  shippingAddresses: ShippingAddressesView_shippingAddresses;
  selectedShippingAddressId: string;
  setSelectedShippingAddressId: (value: string) => void;
  disabled: boolean;
};

const ShippingAddressesView: React.FC<Props> = props => {
  const classes = useStyles();

  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const handleClose = () => setModalIsOpen(false);
  const handleChange = (e: React.ChangeEvent<{}>) => {
    props.setSelectedShippingAddressId((e.target as HTMLInputElement).value);
  };

  return (
    <>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">
          Home Address and Shipping Addresses
        </FormLabel>
        <RadioGroup
          value={props.selectedShippingAddressId}
          className={classes.group}
          onChange={handleChange}
        >
          {props.shippingAddresses.shippingAddresses.map(shippingAddress => (
            <>
              <FormControlLabel
                value={shippingAddress.id}
                control={<Radio />}
                disabled={props.disabled}
                label={`${shippingAddress.addressLine1}, ${
                  shippingAddress.city
                } ${shippingAddress.postalCode}, ${shippingAddress.country} `}
              />
            </>
          ))}
        </RadioGroup>
      </FormControl>
      {!props.disabled && (
        <Button
          type="submit"
          color="primary"
          onClick={() => setModalIsOpen(true)}
        >
          Add New Address
        </Button>
      )}
      <AddShippingAddressModalView
        handleClose={handleClose}
        open={modalIsOpen}
      />
    </>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing(3)
  },
  group: {
    margin: theme.spacing(1, 0)
  }
}));

export default createFragmentContainer(ShippingAddressesView, {
  shippingAddresses: graphql`
    fragment ShippingAddressesView_shippingAddresses on User {
      shippingAddresses: shipping_addresses {
        id
        city
        region
        country
        isDefault: is_default
        addressLine1: address_line_1
        addressLine2: address_line_2
        addressLine3: address_line_3
        postalCode: postal_code
      }
    }
  `
});
