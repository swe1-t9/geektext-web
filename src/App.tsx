import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import { withNavbar } from './shared/Navbar';
import ProtectedRoute from './shared/ProtectedRoute';
import Home from './screens/Home';
import Login from './screens/Login';
import Cart from './screens/Cart';
import Book from './screens/Book';
import BookDetails from './screens/BookDetails';
import Signup from './screens/Signup';
import User from './screens/Profile';
import { StripeProvider } from 'react-stripe-elements';

const App: React.FC = () => (
  <StripeProvider apiKey="pk_test_hkm3zHTM0rvJVKoS2MOvQQKP00DLJJcidK">
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact={true} path="/" component={withNavbar(Home)} />
          <Route exact={true} path="/login" component={withNavbar(Login)} />
          <ProtectedRoute
            exact={true}
            path="/cart"
            component={withNavbar(Cart)}
          />
          <ProtectedRoute
            exact={true}
            path="/me"
            component={withNavbar(User)}
          />
          <Route
            exact={true}
            path="/book-details"
            component={withNavbar(BookDetails)}
          />
          <Route exact={true} path="/signup" component={withNavbar(Signup)} />
          <Route exact={true} path="/book" component={withNavbar(Book)} />
        </Switch>
      </Router>
    </ThemeProvider>
  </StripeProvider>
);

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: blue
  }
});

export default App;
