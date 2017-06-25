console.log("test");

window.onload = function(){ loadFB(); };

function loadFB(){
    var customImage = "https://i.ytimg.com/vi/CvnLMgO4kZI/maxresdefault.jpg";
    var customTitle = "Title";
    var customDescription = "desc";
    var customCaption = "caption";


    window.fbAsyncInit = function() {
      FB.init({
        appId            : '277403859399842',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v2.9'
      });
      document.getElementById('shareBtn').onclick = function() {
        FB.ui({
          display: 'popup',
          method: 'share',
          href: 'http://angelhack-team7.s3-website-us-west-1.amazonaws.com/#/create',
        }, function(response){});
      }
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));

     var foo = {
      "name": "Barber Shop Challenge",
      "timeLimit": 1498917600,
      "location": "West Sacramento, CA",
      "geolocation": [38.5805, -121.5302],
      "purpose": "To get a better understanding of stuff",
      "sourceUser": "Hugh Mann",
      "targetUser": "Ivan Villa",
      "public": false,
      "description": "Go to this one barbershop I like.",
      "image": "https://resizing.flixster.com/o5EeJzgM59OnyfqLecSKxorWMx0=/300x300/v1.aDsxMDU3NDtqOzE3MzcwOzEyMDA7NzAwOzQ2Nw",
      "completionImage": "https://resizing.flixster.com/o5EeJzgM59OnyfqLecSKxorWMx0=/300x300/v1.aDsxMDU3NDtqOzE3MzcwOzEyMDA7NzAwOzQ2Nw"
    }
}

/*var button = document.getElementById("test");
button.innerHTML = foo.name;


// Set the date we're counting down to
var countDownDate = new Date("June 26, 2017 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

 // Get todays date and time
 var now = new Date().getTime();

 // Find the distance between now an the count down date
 var distance = countDownDate - now;

 // Time calculations for days, hours, minutes and seconds
 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
 var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 // Display the result in the element with id="demo"
 document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
 + minutes + "m " + seconds + "s ";

 // If the count down is finished, write some text
 if (distance < 0) {
   clearInterval(x);
   document.getElementById("demo").innerHTML = "EXPIRED";
 }
}, 1000);
});*/
