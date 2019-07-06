import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './screens/Home';
import Login from './screens/Login';
import Cart from './screens/Cart';
import Book from './screens/Book';
import BookDetails from './screens/BookDetails';
import { withNavbar } from './shared/Navbar';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact={true} path="/" component={withNavbar(Home)} />
        <Route exact={true} path="/login" component={withNavbar(Login)} />
        <Route exact={true} path="/cart" component={withNavbar(Cart)} />
        <Route exact={true} path="/book-details" component={withNavbar(BookDetails)} />
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
