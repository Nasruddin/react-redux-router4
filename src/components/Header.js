import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class Header extends Component {
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
      const { activeItem } = this.state;
      return(
        (
        <Menu>
          <Menu.Item
            as={ Link }
            name='home'
            to='/'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>

          <Menu.Item
            as={ Link }
            name='todos'
            to='todos'
            active={activeItem === 'todos'}
            onClick={this.handleItemClick}
          >
            Todos
          </Menu.Item>

          <Menu.Item
            as={ Link }
            name='status'
            to='status'
            active={activeItem === 'status'}
            onClick={this.handleItemClick}
          >
          Completed
          </Menu.Item>
      </Menu>
        )
      )
    }
}

export default Header;
