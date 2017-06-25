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
      <div className="bg-1 home-culture" >
           [ C U L T U R E  &nbsp; &nbsp;C H A L L E N G E ]
         </div>
         <div className="center-block">
           <br/>
           <img src="src/images/icon7.png" />
         </div>
         <br/>
         <br/>
         <div className="container-fluid">
           <div className="row padding-0">
             <div className="col-xs-4 padding-0" >
               <img src="src/images/img4.png" className="img-responsive" />
             </div>
             <div className="col-xs-8">
               <div className="roboto font400">
                 Visit a Nascar Race
               </div>

               <div className="mont created-by">
                 Created by: Ivan Villa
               </div>
             </div>
           </div>
         </div>

         <br/>

         <div className="container-fluid">
           <div className="row padding-0">
             <div className="col-xs-4 padding-0">
               <img src="src/images/img5.png" className="img-responsive" />
             </div>
             <div className="col-xs-8">
               <div className="roboto font400" >
                 Get your haircut in a predominantly black neighborhood
               </div>

               <div className="mont created-by">
                 Created by: Royce Rams
               </div>
             </div>
           </div>
         </div>

             <br/>

         <div className="container-fluid">
           <div className="row padding-0">
             <div className="col-xs-4 padding-0" >
               <img src="src/images/img6.png" className="img-responsive" />
             </div>
             <div className="col-xs-8">
               <div className="roboto font400" >
                 Try a curry dish
               </div>

               <div className="mont created-by">
                 Created by: Franny Linds
               </div>
             </div>
           </div>
         </div>
         <br/>
         <br/>
         <div className="center-block">

         <img src="src/images/icon8.png" className="icon8" />
       </div>


      </div>
    );
  },

});

export default HomePage;
