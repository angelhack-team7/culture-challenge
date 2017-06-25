import React from 'react';
import {} from 'bootstrap/dist/css/bootstrap.css';
import {} from '../css/app.css';
import rp from 'request-promise';
import MyForm from './form/Form.js';
import {  Input,  Select, Textarea, FormGroup, FormControl, InputGroup}  from 'formsy-react-components';
import { Grid, Row, Col, Navbar, NavItem, Nav, Panel, Alert, Modal, Button,Image, Tabs, Tab , DropdownButton, MenuItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import $ from 'jquery';

const CreatePage = React.createClass({

  getInitialState: function() {
    return {
      key: 1
    };
  },

  handleSelect(key) {
    this.setState({key});
  },

  render() {
    return (
      <div>
      <div className="bg-1 culture-bg">
      [ C U L T U R E  &nbsp; &nbsp;C H A L L E N G E ]
       </div>
       <div className="center-block">
         <br/>
         <div className="mont new-challenge">
           Name Your Challenge
         </div>
         <input type="text" className="form-control new-ch-input"/>
         <br/>
         <div className="mont add-people">
           or <span className="find-challenge">Find a Challenge</span>
         </div>
         <div><br/>
           <img src="src/images/icon3.png" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
           <img src="src/images/icon4.png" />
           <br/>
           <img src="src/images/icon5.png" className="icon5-create" />
         </div>
    <br/>

         <div className="mont purpose">
         Purpose
       </div>
       <textarea type="textarea" className="form-control textarea-create" ></textarea>
       <br/><br/>

       <div className="mont guideline-create">
         Set the guidelines
       </div>
       <textarea type="textarea" className="form-control textare-create" ></textarea>
       </div>
       <br/>
       <div className="center-block">
           <label for="files" className="btn btn-lg btn-default opensans">Upload an image <img src="src/images/icon1.png" /></label>
           <input id="files" type="file"/>
         </div>
    <br/>
       <div  className="mont addpeople">
         Add People
       </div>
       <div className="center-block">
         <div className="opensans ivan-file-photo ">
           Ivan Villa
         </div>

         <img  src="src/images/img3.png" />
    <br/>
    <br/>
         <a id="shareBtn" className="">
           <button className="btn btn-default btn-lg btn-send">
             Send Challenge
           </button>
         </a>
         <br/>
         <div  className="mont cancel">
           Cancel
         </div>
         <br/>

         <a  className="mont public-challenges" href="./index.html">
           See public challenges
         </a>


       </div>

       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       </div>
    );
  },

});

export default CreatePage;
