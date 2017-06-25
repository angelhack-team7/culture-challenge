import React from 'react';
import {} from 'bootstrap/dist/css/bootstrap.css';
import {} from '../css/app.css';
import rp from 'request-promise';
// import $ from 'jquery';

const HomePage = React.createClass({

  getInitialState: function() {
      return {

      };
  },

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <button type="button" className="btn btn-primary">Submit</button>

      </div>
    );
  },

});

export default HomePage;
