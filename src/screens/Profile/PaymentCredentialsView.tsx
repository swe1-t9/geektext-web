import { createFragmentContainer } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { makeStyles } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import { Elements } from 'react-stripe-elements';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import * as React from 'react';

import { PaymentCredentialsView_paymentCredentials } from './__generated__/PaymentCredentialsView_paymentCredentials.graphql';
import AddPaymentCredentialModalView from './AddPaymentCredentialModalView';
import { commit as commitRemovePaymentCredentialMutation } from '../../graphql/mutations/RemovePaymentCredentialMutation';

type Props = {
  paymentCredentials: PaymentCredentialsView_paymentCredentials;
  editing: boolean;
};

const PaymentCredentialsView: React.FC<Props> = props => {
  const classes = useStyles();

  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const handleClose = () => setModalIsOpen(false);

  const onClickDelete = (paymentCredentialId: string) => {
    commitRemovePaymentCredentialMutation(
      {
        payment_credential_id: paymentCredentialId
      },
      onSuccess,
      onFailure
    );
  };
  const onSuccess = () => window.location.reload();
  const onFailure = (error: Error) => console.warn(error);

  return (
    <>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Payment Credentials</FormLabel>
        {props.paymentCredentials.paymentCredentials.map(paymentCredential => (
          <div>
            <div>
              {`${paymentCredential.cardAssociation.charAt(0).toUpperCase() +
                paymentCredential.cardAssociation.slice(1)} ending in ${
                paymentCredential.lastFourDigits
              }`}
            </div>
            {props.editing && (
              <IconButton
                onClick={() => onClickDelete(paymentCredential.id)}
                size="small"
              >
                <DeleteIcon />
              </IconButton>
            )}
          </div>
        ))}
      </FormControl>
      <Elements>
        <AddPaymentCredentialModalView
          handleClose={handleClose}
          open={modalIsOpen}
        />
      </Elements>
      {props.editing && (
        <Button
          type="submit"
          color="primary"
          onClick={() => setModalIsOpen(true)}
        >
          Add New Payment Credential
        </Button>
      )}
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
  },
  listItem: {
    flex: 1,
    flexDirection: 'row'
  }
}));

export default createFragmentContainer(PaymentCredentialsView, {
  paymentCredentials: graphql`
    fragment PaymentCredentialsView_paymentCredentials on User {
      paymentCredentials: payment_credentials {
        id
        lastFourDigits: last_four_digits
        cardAssociation: card_association
      }
    }
  `
});
