import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import { withNavbar } from './shared/Navbar';
import ProtectedRoute from './shared/ProtectedRoute';
import Home from './screens/Home';
import Login from './screens/Login';
import ShoppingCart from './screens/ShoppingCart';
import Book from './screens/Book';
import BookDetails from './screens/BookDetails';
import Signup from './screens/Signup';
import User from './screens/Profile';
import BookBrowsing from './screens/BookBrowsing';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact={true} path="/" component={withNavbar(Home)} />
        <Route exact={true} path="/login" component={withNavbar(Login)} />
        <ProtectedRoute
          exact={true}
          path="/shopping-cart"
          component={withNavbar(ShoppingCart)}
        />
        <ProtectedRoute exact={true} path="/me" component={withNavbar(User)} />
        <Route
          exact={true}
          path="/book-details"
          component={withNavbar(BookDetails)}
        />
        <ProtectedRoute
          exact={true}
          path="/catalog"
          component={withNavbar(BookBrowsing)}
        />
        <Route exact={true} path="/signup" component={withNavbar(Signup)} />
        <Route exact={true} path="/book" component={withNavbar(Book)} />
      </Switch>
    </Router>
  </ThemeProvider>
);

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: blue
  }
});


export default App;
