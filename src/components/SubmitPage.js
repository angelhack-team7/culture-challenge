import React from 'react';
import {} from 'bootstrap/dist/css/bootstrap.css';
import {} from '../css/app.css';
import rp from 'request-promise';
// import $ from 'jquery';

const SubmitPage = React.createClass({

  getInitialState: function() {
      return {

      };
  },

  render() {
    return (
      <div>
        <div className="bg-1 center-block">
          [ C U L T U R E  &nbsp; &nbsp;C H A L L E N G E ]
          </div>
          <br/>
          <div  className="roboto roboto-challenge1">
          Get your haircut in a predominantly black neighborhood.
          </div>
          <br/>
          <img src="src/images/img1.png" />
          <div className="mont roboto-challenge1-description">
          King's Pocket
          </div>
          <div className="mont mont-challenge2">
          621 Capitol Mall Dr Suite 2
          <br/>
          Sacramento, CA 95823
          </div>
          <br/>

          <div className="mont challenged-by" >
          Challenged by: Ivan Villa
          </div>
          <div className="mont-challenge2-description" >
          Time left to complete: <br/><span id="countdown"></span>
          </div>
          <br/>

          <div className="mont mont-purpose">
          Purpose
          </div>
          <div  className="opensans reviews">
          "Open yourself up to new experiences. I love to get my hair cut at this place. Check it out! I think it'd be a good experience for you."
          </div>
          <br/>
          <div className="mont tips">
          Tips
          </div>
          <div  className="opensans tips">
          "Just be yourself :)"
          </div>
          <br/>

          <div className="center-block">
            <label for="files" className="btn btn-lg btn-default opensans">Upload Photo of Completion <img src="src/images/icon1.png" /></label>
            <input id="files"  type="file" />

            <a className="btn btn-lg btn-default" id="shareBtn" >
          Submit!
          </a>
          </div>

          <br/>
          <div className="center-block">
            <a className="opensans center-block">
              Create a challenge for Ivan!
            </a>
          </div>
      </div>
    );
  },

});

export default SubmitPage;
