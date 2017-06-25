import React from 'react';
import {} from 'bootstrap/dist/css/bootstrap.css';
import {} from '../css/app.css';
import rp from 'request-promise';
import { LinkContainer } from 'react-router-bootstrap';
// import $ from 'jquery';
import { Grid, Row, Col, Navbar, NavItem, Nav, Panel, Alert, Modal, Button,Image, Tabs, Tab , DropdownButton, MenuItem} from 'react-bootstrap';

const App = React.createClass({

  getInitialState: function() {
      return {

      };
  },

  render() {
    return (
      <div>
        {this.props.children}
        <div>
          <Panel header="" bsStyle="warning">
            <p>Copyright &copy; Team-7 2017</p>
          </Panel>
        </div>

      </div>

    );
  },

});

export default App;
