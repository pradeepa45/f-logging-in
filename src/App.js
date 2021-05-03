import SignUp from './SignUp';
import { Menu } from 'semantic-ui-react';
import LogIn from './LogIn';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import { Component } from 'react';
import HomePage from './HomePage';
import ErrorPage from './Error'


export default class App extends Component {
  state = { activeItem: 'signup' }
  state = {

  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (

      <Router>
        <Menu secondary size='huge' inverted color='red'>
          <Menu.Item as={NavLink} to='/signup'
            name='sign up'
            active={activeItem === 'signup'}
            onClick={this.handleItemClick}

          />
          <Menu.Item as={NavLink} to='/login'
            name='log in'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
          />
        </Menu>

        <Route
          path='/signup'
          exact
          render={() => {
            return (
              <SignUp />
            );
          }}
        />

        <Route
          path='/login'
          exact
          render={() => {
            return (
              <LogIn />
            );
          }}
        />

        

        <Route
        exact
          path='/home'
          render={() => {
            return (
              <HomePage />
            );
          }}
        />
      </Router>
    )
  }
}