import React from 'react';
import {} from 'bootstrap/dist/css/bootstrap.css';
import {} from '../css/app.css';
import rp from 'request-promise';
import $ from 'jquery';
import "../custom.js";
import { Grid, Row, Col, Navbar, NavItem, Nav, Panel, Alert, Modal, Button,Image, Tabs, Tab , DropdownButton, MenuItem} from 'react-bootstrap';



const ChallengePage = React.createClass({

  getInitialState: function() {
      return {

      };
  },

  render() {
    return (
      <div>
        <div className="lato"><br/>
          [ C U L T U R E  &nbsp; &nbsp;C H A L L E N G E ]
          <br/>
          <br/>
          Ivan Villa sent you a challenge!
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className="center-block">
            <img src="src/images/img1.png" className="img-challenge" />
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="roboto roboto-challengepage">
          Get your haircut in a predominantly black neighborhood.
        </div>
        <br/>
        <div  className="mont mont-challengepage">
           Purpose
         </div>
         <div className="opensans opensans-challengepage">
          Open yourself up to new experiences. I love to get my hair cut at this place. Check it out! I think it'd be a good experience for you.
        </div>
        <div className="center-block">
              <img src="src/images/img2.png" />
              <br/>
              <br/>
                  <a class="btn mont fb-btn">
              Accept with Facebook
            </a>

            <br/>
            <br/>
            <div className="mont invite">
              Invite others to this challenge
            </div>

            <br/>
            <br/>
            <br/>
        </div>
      </div>

    );
  },
});

export default ChallengePage;
