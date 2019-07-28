import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import nullthrows from 'nullthrows';
import {
  injectStripe,
  ReactStripeElements,
  CardElement
} from 'react-stripe-elements';

import { commit as commitAddPaymentCredentialMutation } from '../../graphql/mutations/AddPaymentCredentialMutation';

type Props = {
  handleClose: () => void;
  open: boolean;
};

const AddPaymentCredentialModalView: React.FC<
  Props & ReactStripeElements.InjectedStripeProps
> = ({ open, handleClose, stripe }) => {
  const classes = useStyles();

  const onSubmit = async () => {
    const paymentMethodResponse = await ((nullthrows(stripe) as unknown) as {
      createPaymentMethod: (
        type: string
      ) => Promise<stripe.PaymentMethodResponse>;
    }).createPaymentMethod('card');

    const paymentMethod = nullthrows(paymentMethodResponse.paymentMethod);
    const card = nullthrows(paymentMethod.card);
    commitAddPaymentCredentialMutation(
      {
        last_four_digits: parseInt(card.last4),
        card_association: card.brand,
        stripe_token: JSON.stringify(paymentMethod)
      },
      onSuccess,
      onFailure
    );
  };

  const onSuccess = () => window.location.reload();
  const onFailure = (error: Error) => console.warn(error);

  return (
    <Modal open={open} onClose={handleClose}>
      <div className={classes.paper}>
        <Grid container spacing={2} />
        <CardElement className={classes.cardElement} />
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
  },
  cardElement: {
    marginTop: theme.spacing(4)
  }
}));

export default injectStripe(AddPaymentCredentialModalView);
