import React from 'react';
import {} from 'bootstrap/dist/css/bootstrap.css';
import {} from '../css/app.css';
import rp from 'request-promise';
// import $ from 'jquery';

const App = React.createClass({

  getInitialState: function() {
      return {

      };
  },

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  },

});

export default App;
